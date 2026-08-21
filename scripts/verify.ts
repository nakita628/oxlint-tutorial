/**
 * valid / invalid パッケージの期待値を検証するスクリプト。
 *
 *   pnpm verify
 *
 * 検証内容:
 *   1. packages/<name>-valid   … 診断 0 件・終了コード 0 であること
 *   2. packages/<name>-invalid … 診断 1 件以上・終了コード 0 以外であること
 *   3. oxlint.config.ts の overrides で有効化した「すべてのルール」が
 *      invalid 側で最低 1 回は実際に発火していること
 *      （＝設定を書いただけで動作確認していないルールを残さない）
 */
import { spawnSync } from 'node:child_process'
import process from 'node:process'
import config from '../oxlint.config.ts'

type Diagnostic = { code?: string; filename?: string; severity?: string }

const OXLINT = './node_modules/.bin/oxlint'

/** 型情報が必要なパッケージは --type-aware を付けて実行する */
const TYPE_AWARE_PREFIX = 'type-aware'

/** `eslint(no-var)` / `jsx_a11y(alt-text)` のような code からルール名だけを取り出す */
function shortName(code: string): string {
  const match = /\(([^)]+)\)\s*$/.exec(code)
  return match ? match[1] : code
}

/** 設定のルールキー（`typescript/no-explicit-any` など）からルール名だけを取り出す */
function ruleKeyToName(key: string): string {
  const index = key.lastIndexOf('/')
  return index === -1 ? key : key.slice(index + 1)
}

function isEnabled(value: unknown): boolean {
  const severity = Array.isArray(value) ? value[0] : value
  return (
    severity === 'error' || severity === 'deny' || severity === 'warn' || severity === 2 || severity === 1
  )
}

function runOxlint(target: string, typeAware: boolean): { status: number; diagnostics: Diagnostic[] } {
  const args = typeAware ? ['--type-aware', target, '-f', 'json'] : [target, '-f', 'json']
  const result = spawnSync(OXLINT, args, { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 })
  const stdout = result.stdout ?? ''
  const start = stdout.indexOf('{')
  if (start === -1 || !stdout.slice(start).startsWith('{ "diagnostics"')) {
    // 設定エラーなどで JSON が返らなかった場合は、そのまま出力して失敗させる
    const stderr = result.stderr ?? ''
    if (stdout.trim() !== '' || stderr.trim() !== '') {
      process.stdout.write(`\n[oxlint ${target}]\n${stdout}${stderr}\n`)
    }
    return { status: result.status ?? 1, diagnostics: [] }
  }
  const parsed = JSON.parse(stdout.slice(start)) as { diagnostics?: Diagnostic[] }
  return { status: result.status ?? 0, diagnostics: parsed.diagnostics ?? [] }
}

/** overrides の files パターン（`packages/<path>/**`）から対象ディレクトリを取り出す */
function dirOf(pattern: string): string | undefined {
  return /^(packages\/.+)\/\*\*$/.exec(pattern)?.[1]
}

const failures: string[] = []
let checkedPackages = 0
let checkedRules = 0
const coveredRules = new Set<string>()

for (const override of config.overrides ?? []) {
  const dirs = (override.files ?? []).map((pattern) => dirOf(pattern))
  const validDir = dirs[0]
  const invalidDir = dirs[1]
  if (validDir === undefined || invalidDir === undefined) {
    continue
  }

  // packages/valid → eslint、packages/react-valid → react、
  // packages/valid/src/strict → eslint:strict のように表示名を作る
  const [, top, ...rest] = validDir.split('/')
  const base = top === 'valid' ? 'eslint' : top.replace(/-valid$/, '')
  const label = rest.length > 0 ? `${base}:${rest[rest.length - 1]}` : base
  const typeAware = top.startsWith(TYPE_AWARE_PREFIX)
  checkedPackages += 1

  // --- 1. valid 側は 0 件でなければならない -------------------------
  const valid = runOxlint(validDir, typeAware)
  const validOk = valid.diagnostics.length === 0 && valid.status === 0
  if (!validOk) {
    failures.push(
      `${validDir}: 診断 ${valid.diagnostics.length} 件 / exit ${valid.status}（0 件・exit 0 であるべき）\n` +
        valid.diagnostics
          .slice(0, 20)
          .map((diagnostic) => `    - ${diagnostic.filename}: ${diagnostic.code}`)
          .join('\n'),
    )
  }

  // --- 2. invalid 側は 1 件以上でなければならない --------------------
  const invalid = runOxlint(invalidDir, typeAware)
  const invalidOk = invalid.diagnostics.length > 0 && invalid.status !== 0
  if (!invalidOk) {
    failures.push(`${invalidDir}: 診断が検出されなかった（1 件以上・exit 1 であるべき）`)
  }

  // --- 3. 有効化したルールがすべて発火しているか --------------------
  const fired = new Set(invalid.diagnostics.map((diagnostic) => shortName(diagnostic.code ?? '')))
  const expected = Object.entries(override.rules ?? {})
    .filter(([, value]) => isEnabled(value))
    .map(([key]) => ({ key, name: ruleKeyToName(key) }))
  checkedRules += expected.length
  for (const rule of expected) {
    coveredRules.add(rule.key)
  }
  const notFired = expected.filter((rule) => !fired.has(rule.name))
  if (notFired.length > 0) {
    failures.push(
      `${invalidDir}: 設定したが発火しなかったルール (${notFired.length}件): ${notFired
        .map((rule) => rule.name)
        .join(', ')}`,
    )
  }

  const mark = validOk && invalidOk && notFired.length === 0 ? '✓' : '✗'
  process.stdout.write(
    `${mark} ${label.padEnd(16)} valid=${valid.diagnostics.length} invalid=${invalid.diagnostics.length} rules=${expected.length}${typeAware ? ' (--type-aware)' : ''}\n`,
  )
}

process.stdout.write(`\n検証したパッケージ: ${checkedPackages} ペア / 検証したルール: ${checkedRules}\n`)

if (failures.length > 0) {
  process.stdout.write(`\n=== 失敗 (${failures.length}) ===\n`)
  for (const failure of failures) {
    process.stdout.write(`✗ ${failure}\n`)
  }
  process.exit(1)
}

process.stdout.write('すべての期待値を満たしています。\n')
