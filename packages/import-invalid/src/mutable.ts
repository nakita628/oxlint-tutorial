// import/no-mutable-exports: let / var の export は書き換えられてしまう
export let counter = 0

export function increment(): void {
  counter += 1
}
