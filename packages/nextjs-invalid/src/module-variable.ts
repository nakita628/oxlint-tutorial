// nextjs/no-assign-module-variable: module という変数は Next.js が使うため代入できない
let module = 1
module = 2

export { module }
