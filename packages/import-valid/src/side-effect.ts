// import/no-unassigned-import: 副作用は関数として export し、呼び出し側で明示的に呼ぶ
export function registerSideEffect(): void {
  globalThis.console.info('side effect')
}
