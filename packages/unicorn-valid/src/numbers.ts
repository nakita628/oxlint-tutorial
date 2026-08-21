// numbers.ts の適合版

export function numberProperties(value: number): boolean {
  // unicorn/prefer-number-properties: グローバルの isNaN ではなく Number.isNaN を使う
  return Number.isNaN(value)
}

export function zeroFraction(): number {
  // unicorn/no-zero-fractions: 1 と書く
  return 1
}

export function literalCase(): number {
  // unicorn/number-literal-case: 接頭辞は小文字 0x、16 進の英字は大文字
  return 0xFF
}

export function separators(): number {
  // unicorn/numeric-separators-style: 桁区切りを入れる
  return 1_000_000
}

export function mathTrunc(value: number): number {
  // unicorn/prefer-math-trunc: Math.trunc() を使う
  return Math.trunc(value)
}

export function minMax(value: number): number {
  // unicorn/prefer-math-min-max: Math.max() を使う
  return Math.max(value, 10)
}

export function modernMath(value: number): number {
  // unicorn/prefer-modern-math-apis: Math.log2() を使う
  return Math.log2(value)
}

export function toFixedDigits(value: number): string {
  // unicorn/require-number-to-fixed-digits-argument: 桁数を明示する
  return value.toFixed(2)
}

export function dateNow(): number {
  // unicorn/prefer-date-now: Date.now() を使う
  return Date.now()
}

export function bigintLiteral(): bigint {
  // unicorn/prefer-bigint-literals: 1n と書く
  return 1n
}

export function numberCoercion(value: unknown): number {
  // unicorn/prefer-number-coercion: 単項プラスではなく Number() を使う
  const converted: number = Number(value)
  return converted
}

export function nativeCoercion(values: Array<unknown>): Array<string> {
  // unicorn/prefer-native-coercion-functions: String をそのまま渡す
  return values.map(String)
}
