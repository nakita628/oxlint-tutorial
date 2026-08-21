// Complexity and max depth and max statements and max lines per function samples.
export const analyse = (flag: boolean, mode: number, size: number): number => {
  let total = 0
  if (flag) {
    if (mode > 0) {
      if (size > 0) {
        total = 1
      }
    }
  }
  const alpha = 1
  const bravo = 2
  const delta = 3
  const gamma = 4
  total = total + alpha + bravo + delta + gamma
  return total
}
