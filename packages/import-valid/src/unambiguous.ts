// import/unambiguous: import か export を持たせて ES モジュールだと分かるようにする
export function ambiguous(): void {
  globalThis.console.info('unambiguous module')
}
