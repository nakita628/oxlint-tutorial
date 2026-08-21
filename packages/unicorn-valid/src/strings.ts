// strings.ts の適合版

export function replaceAll(value: string): string {
  // unicorn/prefer-string-replace-all: replaceAll() を使う
  return value.replaceAll('a', 'b')
}

export function slicing(value: string): string {
  // unicorn/prefer-string-slice: slice() を使う
  return value.slice(1, 3)
}

export function trimming(value: string): string {
  // unicorn/prefer-string-trim-start-end: trimStart / trimEnd を使う
  return value.trimStart().trimEnd()
}

export function startsWith(value: string): boolean {
  // unicorn/prefer-string-starts-ends-with: startsWith() を使う
  return value.startsWith('abc')
}

export function codePoint(value: string): number | undefined {
  // unicorn/prefer-code-point: codePointAt() を使う
  return value.codePointAt(0)
}

export function rawString(): string {
  // unicorn/prefer-string-raw: String.raw を使う
  return String.raw`C:\Windows\System32`
}

export function hexEscape(): string {
  // unicorn/no-hex-escape, unicorn/escape-case: \u エスケープを大文字で書く
  return '\u001B[0m'
}

export function textEncoding(): string {
  // unicorn/text-encoding-identifier-case: 'utf8' を使う
  return 'utf8'
}

export function regexpTest(value: string): boolean {
  // unicorn/prefer-regexp-test: test() を使う
  return /abc/u.test(value)
}

export function negativeIndex(value: string): string {
  // unicorn/prefer-negative-index: 負のインデックスを使う
  return value.slice(-1)
}

export function templateLiteralEscape(value: string): string {
  // unicorn/consistent-template-literal-escape: `\${...}` と書く
  void value
  return `\${value}`
}

export function consoleSpaces(): void {
  // unicorn/no-console-spaces: 余分な空白を入れない
  console.log('value', 'unit')
}
