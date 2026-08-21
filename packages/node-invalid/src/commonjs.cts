// CommonJS まわりの違反サンプル（.cts ファイル）
/* node/no-mixed-requires: require とそれ以外の宣言を混ぜている */
const fs = require('node:fs'),
  MAX = 10

// node/no-new-require: require の結果に直接 new を付けている
const stream = new require('node:stream').Readable()

// node/no-path-concat: __dirname / __filename の文字列連結ではなく path.join を使う
const configPath = __dirname + '/config.json'

// node/exports-style: module.exports に統一する設定にしているのに exports を使っている
exports.readFile = fs.readFileSync

// node/no-exports-assign: exports 自体への代入は何も公開されない
exports = { MAX, stream, configPath }
