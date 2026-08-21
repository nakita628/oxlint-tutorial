// compiler.tsx の適合版
import { useMemo, useRef, useState, type ReactNode } from 'react'

// react/purity: レンダー中は純粋に保つ（乱数は state などで扱う）
export const Pure = ({ seed }: { seed: number }): JSX.Element => <span>{seed}</span>

// react/refs: ref はレンダー中に読まない
export const UseRefInHandler = (): JSX.Element => {
  const ref = useRef(0)
  const handleClick = (): void => {
    ref.current += 1
  }
  return <button type="button" onClick={handleClick} aria-label="increment" />
}

// react/immutability: state はセッター経由で更新する
export const UpdateState = (): JSX.Element => {
  const [state, setState] = useState({ value: 0 })
  const handleClick = (): void => {
    setState({ value: state.value + 1 })
  }
  return (
    <button type="button" onClick={handleClick}>
      {state.value}
    </button>
  )
}

// react/globals: 外部の変数はレンダー中に書き換えない
const readOnlyGlobal = false

export const ReadGlobal = (): JSX.Element => <span>{String(readOnlyGlobal)}</span>

// react/syntax: const には再代入しない
export const NoReassign = (): JSX.Element => {
  const value = 1
  return <span>{value}</span>
}

// react/unsupported-syntax: eval は使わない
export const NoEval = (): JSX.Element => <span>{1 + 1}</span>

// react/error-boundaries: JSX は try/catch で囲まない
export const NoTryCatch = ({ children }: { children: ReactNode }): JSX.Element => (
  <div>{children}</div>
)

// react/capitalized-calls: コンポーネントは JSX として描画する
const Inner = ({ value }: { value: number }): JSX.Element => <span>{value}</span>

export const RenderedAsJsx = (): JSX.Element => (
  <div>
    <Inner value={1} />
  </div>
)

// react/use-memo, react/void-use-memo: useMemo は同期関数で値を返す
export const GoodMemo = ({ items }: { items: Array<number> }): JSX.Element => {
  const total = useMemo(() => items.length, [items])
  return <span>{total}</span>
}

// react/incompatible-library: メモ化と相性の悪いライブラリ API は使わない
export const Table = ({ rows }: { rows: Array<number> }): JSX.Element => (
  <div>{rows.length}</div>
)
