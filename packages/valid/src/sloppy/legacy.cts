// legacy.cts の適合版（スクリプト向けのルールを守った書き方）

// no-delete-var: 変数は delete せず、null を入れて捨てる
const removable: number | null = null

// no-nonoctal-decimal-escape: 通常の文字として書く
const escaped = '8'

// no-obj-calls: Math は名前空間として使う
const called = Math.max(1, 2)

// no-new-native-nonconstructor: Symbol は new せずに呼ぶ
const symbol = Symbol('oxlint')

module.exports = { removable, escaped, called, symbol }
