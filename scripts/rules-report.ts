/**
 * oxlint が持つ全ルールに対するカバレッジを集計するスクリプト。
 *
 *   pnpm rules
 *
 * oxlint に同梱されている configuration_schema.json から
 * 「このバージョンの oxlint が持つ全ルール名」を取り出し、
 * oxlint.config.ts で 'error' にしているルールと突き合わせる。
 * 結果は docs/RULES.md に書き出す。
 */
import { readFileSync, writeFileSync } from 'node:fs'
import process from 'node:process'
import config from '../oxlint.config.ts'

type Severity = unknown

const SCHEMA_PATH = './node_modules/oxlint/configuration_schema.json'
const OUTPUT_PATH = './docs/RULES.md'

/** 設定のルールキー（`typescript/no-explicit-any` など）をプラグイン名とルール名に分解する */
function splitRuleKey(key: string): { plugin: string; name: string } {
  const index = key.lastIndexOf('/')
  if (index === -1) {
    return { plugin: 'eslint', name: key }
  }
  return { plugin: key.slice(0, index), name: key.slice(index + 1) }
}

function isEnabled(value: Severity): boolean {
  const severity = Array.isArray(value) ? value[0] : value
  return (
    severity === 'error' || severity === 'deny' || severity === 'warn' || severity === 2 || severity === 1
  )
}

// --- 1. oxlint が持つ全ルールを列挙する ---------------------------------
const schema = JSON.parse(readFileSync(SCHEMA_PATH, 'utf8')) as {
  definitions: Record<string, { properties?: Record<string, unknown> }>
}
const allRuleKeys = Object.keys(schema.definitions.DummyRuleMap?.properties ?? {})
const allRules = new Map<string, Set<string>>()
for (const key of allRuleKeys) {
  const { plugin, name } = splitRuleKey(key)
  const names = allRules.get(plugin) ?? new Set<string>()
  names.add(name)
  allRules.set(plugin, names)
}

// --- 2. 設定で有効化 / 明示的に無効化しているルールを集める ---------------
const enabled = new Set<string>()
const disabled = new Set<string>()

function collect(rules: Record<string, Severity> | undefined): void {
  for (const [key, value] of Object.entries(rules ?? {})) {
    const { plugin, name } = splitRuleKey(key)
    const canonical = `${plugin}/${name}`
    if (isEnabled(value)) {
      enabled.add(canonical)
    } else {
      disabled.add(canonical)
    }
  }
}

collect(config.rules as Record<string, Severity>)
for (const override of config.overrides ?? []) {
  collect(override.rules as Record<string, Severity>)
}

// enabled と disabled の両方に現れるルールは「どこかで有効」として扱う
for (const rule of enabled) {
  disabled.delete(rule)
}

// --- 3. 集計してレポートを書き出す --------------------------------------
const lines: Array<string> = []
lines.push('# oxlint ルールカバレッジ')
lines.push('')
lines.push('`pnpm rules` で生成しています（手で編集しないでください）。')
lines.push('')
lines.push('- ✅ … `oxlint.config.ts` で `error` にしていて、`packages/*-invalid` に違反サンプルがある')
lines.push('- ⚪ … 理由付きで `off` にしている（設定ファイル内のコメント参照）')
lines.push('')

let totalCount = 0
let enabledCount = 0
const summary: Array<string> = []

for (const plugin of [...allRules.keys()].sort()) {
  const names = [...(allRules.get(plugin) ?? new Set<string>())].sort()
  const pluginEnabled = names.filter((name) => enabled.has(`${plugin}/${name}`))
  totalCount += names.length
  enabledCount += pluginEnabled.length
  summary.push(
    `| ${plugin} | ${pluginEnabled.length} | ${names.length} | ${Math.round((pluginEnabled.length / names.length) * 100)}% |`,
  )
}

lines.push('## サマリー')
lines.push('')
lines.push('| プラグイン | 検証済み | 全ルール数 | 割合 |')
lines.push('| --- | ---: | ---: | ---: |')
lines.push(...summary)
lines.push(
  `| **合計** | **${enabledCount}** | **${totalCount}** | **${Math.round((enabledCount / totalCount) * 100)}%** |`,
)
lines.push('')

for (const plugin of [...allRules.keys()].sort()) {
  const names = [...(allRules.get(plugin) ?? new Set<string>())].sort()
  lines.push(`## ${plugin}（${names.length} ルール）`)
  lines.push('')
  for (const name of names) {
    const canonical = `${plugin}/${name}`
    lines.push(`- ${enabled.has(canonical) ? '✅' : '⚪'} \`${canonical}\``)
  }
  lines.push('')
}

writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`)

process.stdout.write(`全ルール: ${totalCount}\n`)
process.stdout.write(`検証済み（error）: ${enabledCount}\n`)
process.stdout.write(`理由付きで off: ${totalCount - enabledCount}\n`)
process.stdout.write(`カバレッジ: ${Math.round((enabledCount / totalCount) * 100)}%\n`)
process.stdout.write(`${OUTPUT_PATH} を更新しました。\n`)
