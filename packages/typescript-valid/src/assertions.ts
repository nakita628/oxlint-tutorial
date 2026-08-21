// assertions.ts の適合版

declare const maybe: { value?: { nested?: number } } | null

// typescript/no-non-null-assertion: オプショナルチェーンと既定値で安全に取り出す
export function nonNull(): number {
  return maybe?.value?.nested ?? 0
}

// typescript/no-extra-non-null-assertion: ! を重ねない
export function extraNonNull(): unknown {
  return maybe
}

// typescript/no-non-null-asserted-optional-chain: ! を付けない
export function assertedOptionalChain(): { nested?: number } | undefined {
  return maybe?.value
}

// typescript/no-non-null-asserted-nullish-coalescing: ?? だけで既定値を与える
export function assertedNullish(): { nested?: number } {
  return maybe?.value ?? { nested: 0 }
}

// typescript/consistent-type-assertions: `as T` で書く
export function angleBracket(value: unknown): string {
  return value as string
}

// typescript/prefer-as-const: as const を使う
export const literal = 'literal' as const

// typescript/no-confusing-non-null-assertion: 素直に比較する
export function confusing(left: { value?: number }, right: number): boolean {
  return left.value === right
}
