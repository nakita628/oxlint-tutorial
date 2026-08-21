// 三項演算子ではなく if 文で書く（no-ternary）
const zero = 0
const positiveLabel = 'positive'
const negativeLabel = 'negative'

export const pickLabel = (score: number): string => {
  if (score > zero) {
    return positiveLabel
  }
  return negativeLabel
}
