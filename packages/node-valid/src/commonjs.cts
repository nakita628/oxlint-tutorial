// commonjs.cts の適合版
// node/no-mixed-requires: require とその他の宣言を分ける
const fs = require('node:fs')
const nodePath = require('node:path')

// node/no-new-require: require と new を分ける
const { Readable } = require('node:stream')
const stream = new Readable()

// node/no-path-concat: path.join() を使う
const configPath = nodePath.join(__dirname, 'config.json')

const MAX = 10

// node/exports-style, node/no-exports-assign: module.exports にまとめて代入する
module.exports = { MAX, stream, configPath, readFile: fs.readFile }
