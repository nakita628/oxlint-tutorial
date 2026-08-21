// import/no-nodejs-modules: このディレクトリでは Node.js 組み込みモジュールを禁止している
import path from 'node:path'

// import/exports-last: export はファイルの末尾にまとめる
export const first = path.sep

const second = 2

// import/group-exports: export 文はひとつにまとめる
export { second }

// import/no-default-export: default export を禁止している
export default first
