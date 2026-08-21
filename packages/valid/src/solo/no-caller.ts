// no-caller: arguments.callee ではなく名前付き関数を使う
export const legacy = function legacy(): unknown {
  return legacy
}
