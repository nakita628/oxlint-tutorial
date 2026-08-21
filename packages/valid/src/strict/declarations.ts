// 宣言はひとつずつ、var を使わずスコープの先頭で書く
// （one-var / sort-vars / vars-on-top）
const first = 1
const second = 2

export const collect = (): number => {
  const total = first + second
  return total
}
