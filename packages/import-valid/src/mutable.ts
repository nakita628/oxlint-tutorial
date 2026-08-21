// import/no-mutable-exports: 可変な状態は関数経由で公開する
let counter = 0

export function increment(): number {
  counter += 1
  return counter
}

export function getCounter(): number {
  return counter
}
