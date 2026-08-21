// 文字列・数値リテラルまわりの違反サンプル

export function templates(name: string): string {
  // prefer-template: 文字列連結ではなくテンプレートリテラルを使う
  return 'Hello, ' + name + '!'
}

export function uselessConcat(): string {
  // no-useless-concat: リテラル同士の連結は意味がない
  return 'foo' + 'bar'
}

export function templateInString(name: string): string {
  void name
  // no-template-curly-in-string: 通常の文字列に ${} を書いている
  return 'Hello, ${name}!'
}

export function uselessEscape(): string {
  // no-useless-escape: 不要なエスケープ
  return 'a\%b'
}

export function coercion(value: unknown): boolean {
  // no-implicit-coercion: !! による暗黙の型変換
  return !!value
}

export function radixParse(value: string): number {
  // radix: parseInt は基数を明示する
  return parseInt(value)
}

export function numericLiterals(): number {
  // prefer-numeric-literals: parseInt('111110111', 2) は 0b111110111 と書ける
  return parseInt('111110111', 2)
}

export function exponent(base: number, power: number): number {
  // prefer-exponentiation-operator / no-restricted-properties: Math.pow ではなく **
  return Math.pow(base, power)
}

export function bitwise(value: number): number {
  // no-bitwise: ビット演算子を禁止
  return value & 0xff
}

export function symbols(): symbol {
  // symbol-description: Symbol には説明を付ける
  return Symbol()
}

// no-multi-str: バックスラッシュによる行継続で複数行文字列を作らない
export function multiStr(): string {
  // 行継続そのものが違反サンプルなので整形対象から外す
  // oxfmt-ignore
  return 'first \
second'
}

// no-loss-of-precision: 表現できる桁数を超えた数値リテラル
export function lossOfPrecision(): number {
  return 9007199254740993
}

// no-irregular-whitespace: コード中に通常でない空白（U+00A0）が混ざっている
export function irregularWhitespace(): string {
  // U+00A0 の位置そのものが違反サンプルなので整形対象から外す
  // oxfmt-ignore
  const value = 'ab'
  return value
}

// no-script-url: javascript: URL を使わない
export function scriptUrl(): string {
  return 'javascript:void(0)'
}
