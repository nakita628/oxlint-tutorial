// 型アサーション・非 null アサーションまわりの違反サンプル

declare const maybe: { value?: { nested?: number } } | null

// typescript/no-non-null-assertion: ! による非 null アサーションを禁止
export function nonNull(): number {
  return maybe!.value!.nested!
}

// typescript/no-extra-non-null-assertion: ! の重ねがけ
export function extraNonNull(): unknown {
  return maybe!!
}

// typescript/no-non-null-asserted-optional-chain: ?. の結果への ! は意味を打ち消す
export function assertedOptionalChain(): { nested?: number } {
  return maybe?.value!
}

// typescript/no-non-null-asserted-nullish-coalescing: ! を付けたうえで ?? を使うのは矛盾
export function assertedNullish(): { nested?: number } {
  return maybe!.value! ?? { nested: 0 }
}

// typescript/consistent-type-assertions: `<T>value` ではなく `value as T` を使う
export function angleBracket(value: unknown): string {
  return <string>value
}

// typescript/prefer-as-const: リテラル型への as は as const で書く
export const literal = 'literal' as 'literal'

// typescript/no-confusing-non-null-assertion: `!` と `==` が紛らわしい
export function confusing(left: { value?: number }, right: number): boolean {
  return left.value! == right
}
