// 演算子 void は使わない（no-void）
// コメントはコードと同じ行に書かない（no-inline-comments）
// 英語コメントは大文字始まりにする（capitalized-comments。日本語コメントは対象外）
const one = 1

export const discard = (value: number): number => value
export const keep = one
