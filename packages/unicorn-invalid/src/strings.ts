// 文字列操作まわりの違反サンプル

export function replaceAll(value: string): string {
  // unicorn/prefer-string-replace-all: /g 付き正規表現より replaceAll()
  return value.replace(/a/gu, 'b')
}

export function slicing(value: string): string {
  // unicorn/prefer-string-slice: substr / substring ではなく slice()
  return value.substring(1, 3)
}

export function trimming(value: string): string {
  // unicorn/prefer-string-trim-start-end: trimLeft / trimRight は非推奨
  return value.trimLeft().trimRight()
}

export function startsWith(value: string): boolean {
  // unicorn/prefer-string-starts-ends-with: 正規表現より startsWith()
  return /^abc/u.test(value)
}

export function codePoint(value: string): number {
  // unicorn/prefer-code-point: charCodeAt ではなく codePointAt
  return value.charCodeAt(0)
}

export function rawString(): string {
  // unicorn/prefer-string-raw: バックスラッシュだらけの文字列は String.raw で
  return 'C:\\Windows\\System32'
}

export function hexEscape(): string {
  // unicorn/no-hex-escape: \x よりも \u
  return '\x1b[0m'
}

export function escapeCase(): string {
  // unicorn/escape-case: エスケープの英字は大文字にする
  return '\u001b'
}

export function textEncoding(): string {
  // unicorn/text-encoding-identifier-case: 'UTF-8' ではなく 'utf8'
  return 'UTF-8'
}

export function regexpTest(value: string): boolean {
  // unicorn/prefer-regexp-test: match() の真偽判定は test()
  return Boolean(value.match(/abc/u))
}

export function negativeIndex(value: string): string {
  // unicorn/prefer-negative-index: slice(-1) と書ける
  return value.slice(value.length - 1)
}

export function templateLiteralEscape(value: string): string {
  // unicorn/consistent-template-literal-escape: `$\{...}` ではなく `\${...}` と書く
  void value
  return `$\{value}`
}

export function consoleSpaces(): void {
  // unicorn/no-console-spaces: console の引数の前後に余分な空白を入れない
  console.log('value ', 'unit')
}
