// 複雑さ・ネスト・文の数・行数を上限内に収める
// （complexity / max-depth / max-statements / max-lines-per-function）
const enabled = 1
const disabled = 0

const pickFlag = (flag: boolean): number => {
  if (flag) {
    return enabled
  }
  return disabled
}

export const analyse = (flag: boolean, mode: number): number => {
  const base = pickFlag(flag)
  return base + mode
}
