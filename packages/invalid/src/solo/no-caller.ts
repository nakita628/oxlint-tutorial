// no-caller: arguments.callee / arguments.caller を使わない
export const legacy = function (): unknown {
  // oxlint-disable-next-line eslint/prefer-rest-params
  return arguments.callee
}
