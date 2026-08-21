// スクリプト（非モジュール）でのみ再現できる違反サンプル
// ES モジュールは常に strict mode なので、これらは .cts のスクリプトで検証する

// no-implicit-globals: 宣言なしでグローバルを作っている
implicitGlobal = 1

// no-delete-var: 変数そのものを delete している
var removable = 1
delete removable

// no-nonoctal-decimal-escape: \8 や \9 のエスケープ
var escaped = '\8'

// no-obj-calls: Math は関数として呼べない
var called = Math()

// no-new-native-nonconstructor: Symbol は new できない
var symbol = new Symbol()

module.exports = { implicitGlobal, escaped, called, symbol }
