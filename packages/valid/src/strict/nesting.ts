// コールバックのネストを浅く保つ（max-nested-callbacks）
const factor = 2
const initial = 0

export const runAll = (items: Array<number>): number => {
  const doubled = items.map((one) => one * factor)
  return doubled.reduce((total, one) => total + one, initial)
}
