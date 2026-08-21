// strings.ts の適合版

export function templates(name: string): string {
  // prefer-template: テンプレートリテラル
  return `Hello, ${name}!`
}

export function uselessConcat(): string {
  // no-useless-concat: 最初から 1 つの文字列にする
  return 'foobar'
}

export function templateInString(name: string): string {
  // no-template-curly-in-string: 埋め込みたいならテンプレートリテラルで
  return `Hello, ${name}!`
}

export function uselessEscape(): string {
  // no-useless-escape: 不要なバックスラッシュを付けない
  return 'a%b'
}

export function coercion(value: unknown): boolean {
  // no-implicit-coercion: Boolean() で明示的に変換する
  return Boolean(value)
}

export function radixParse(value: string): number {
  // radix: 基数を明示する
  return Number.parseInt(value, 10)
}

export function numericLiterals(): number {
  // prefer-numeric-literals: 2 進数リテラルで書く
  return 0b111110111
}

export function exponent(base: number, power: number): number {
  // prefer-exponentiation-operator / no-restricted-properties: ** 演算子を使う
  return base ** power
}

export function bitwise(value: number): number {
  // no-bitwise: ビット演算を使わずに剰余で表現する
  return value % 256
}

export function symbols(): symbol {
  // symbol-description: 説明を付ける
  return Symbol('oxlint-tutorial')
}

// no-multi-str: 複数行はテンプレートリテラルか連結で書く
export function multiStr(): string {
  return ['first', 'second'].join(' ')
}

// no-loss-of-precision: 安全に表現できる範囲の数値を使う
export function lossOfPrecision(): number {
  return 9007199254740991
}

// no-irregular-whitespace: 通常の空白だけを使う
export function irregularWhitespace(): string {
  const value = 'ab'
  return value
}

// no-script-url: javascript: URL は使わない
export function scriptUrl(): string {
  return 'https://oxc.rs'
}
