// import/no-commonjs, import/no-dynamic-require, import/no-amd:
// CommonJS / AMD ではなく ES モジュールの構文を使う
import fs from 'node:fs'
import nodePath from 'node:path'

export const modules = { fs, nodePath }
