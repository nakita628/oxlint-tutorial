// import/no-commonjs: require / module.exports を使っている
const fs = require('node:fs')

// import/no-dynamic-require: 動的な require
const dynamicName = 'node:path'
const dynamic = require(dynamicName)

// import/no-amd: AMD の define / require([...]) を使っている
declare const define: (deps: Array<string>, factory: () => void) => void
define(['node:os'], () => {
  void 0
})

module.exports = { fs, dynamic }
