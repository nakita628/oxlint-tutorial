// 数値まわりの違反サンプル

export function numberProperties(value: string): number {
  // unicorn/prefer-number-properties: グローバルの parseInt ではなく Number.parseInt
  return parseInt(value, 10)
}

export function zeroFraction(): number {
  // unicorn/no-zero-fractions: 1.0 は 1 と書く
  return 1.0
}

export function literalCase(): number {
  // unicorn/number-literal-case: 接頭辞は小文字 0x、16 進の英字は大文字にする
  return 0xff
}

export function separators(): number {
  // unicorn/numeric-separators-style: 桁区切りを入れる
  return 1000000
}

export function mathTrunc(value: number): number {
  // unicorn/prefer-math-trunc: ~~x や `| 0` ではなく Math.trunc()
  return ~~value
}

export function minMax(value: number): number {
  // unicorn/prefer-math-min-max: 三項演算子より Math.max()
  return value > 10 ? value : 10
}

export function modernMath(value: number): number {
  // unicorn/prefer-modern-math-apis: Math.log(x) / Math.LN2 は Math.log2(x)
  return Math.log(value) / Math.LN2
}

export function toFixedDigits(value: number): string {
  // unicorn/require-number-to-fixed-digits-argument: toFixed() の桁数を明示する
  return value.toFixed()
}

export function dateNow(): number {
  // unicorn/prefer-date-now: new Date().getTime() は Date.now()
  return new Date().getTime()
}

export function bigintLiteral(): bigint {
  // unicorn/prefer-bigint-literals: BigInt(1) ではなく 1n
  return BigInt(1)
}

export function numberCoercion(value: unknown): number {
  // unicorn/prefer-number-coercion: 単項プラスではなく Number()
  return +(value as string)
}

export function nativeCoercion(values: Array<unknown>): Array<string> {
  // unicorn/prefer-native-coercion-functions: (v) => String(v) は String と書ける
  return values.map((value) => String(value))
}
