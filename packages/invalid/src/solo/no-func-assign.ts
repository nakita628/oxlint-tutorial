// no-func-assign: 関数宣言に再代入している
export function target(): number {
  return 1
}

target = function (): number {
  return 2
}
