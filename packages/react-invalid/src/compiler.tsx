// React Compiler が提供するルールの違反サンプル
import { useMemo, useRef, useState } from 'react'
import { useReactTable } from '@tanstack/react-table'

// react/purity: レンダー中に Math.random() などの非純粋な関数を呼ばない
export const Impure = (): JSX.Element => {
  const value = Math.random()
  return <span>{value}</span>
}

// react/refs: ref.current はレンダー中に読み書きしない
export const ReadRefInRender = (): JSX.Element => {
  const ref = useRef(0)
  return <span>{ref.current}</span>
}

// react/immutability: useState が返した値を直接書き換えない
export const MutateState = (): JSX.Element => {
  const [state] = useState({ value: 0 })
  state.value = 1
  return <span>{state.value}</span>
}

// react/globals: レンダー中にコンポーネント外の変数へ代入しない
let someGlobal = false

export const WriteGlobal = (): JSX.Element => {
  someGlobal = true
  return <span>{String(someGlobal)}</span>
}

// react/syntax: const で宣言した変数に再代入している
export const ReassignConst = (): JSX.Element => {
  const value = 1
  value = 2
  return <span>{value}</span>
}

// react/unsupported-syntax: eval は React Compiler が解析できない
export const UsesEval = (): JSX.Element => {
  const value = eval('1 + 1') as number
  return <span>{value}</span>
}

// react/error-boundaries: JSX を try/catch で囲んでも子のエラーは捕捉できない
export const TryCatchJsx = ({ children }: { children: JSX.Element }): JSX.Element => {
  try {
    return <div>{children}</div>
  } catch {
    return <div>error</div>
  }
}

// react/capitalized-calls: コンポーネントは JSX として描画する
const Inner = ({ value }: { value: number }): JSX.Element => <span>{value}</span>

export const DirectCall = (): JSX.Element => {
  const element = Inner({ value: 1 })
  return <div>{element}</div>
}

// react/use-memo: useMemo に async 関数を渡さない
export const AsyncMemo = ({ value }: { value: Promise<number> }): JSX.Element => {
  const result = useMemo(async () => {
    await value
  }, [value])
  return <div>{String(result)}</div>
}

// react/void-use-memo: useMemo は値を返す必要がある
export const VoidMemo = ({ items }: { items: Array<number> }): JSX.Element => {
  const result = useMemo(() => {
    void items
  }, [items])
  return <span>{String(result)}</span>
}

// react/incompatible-library: メモ化と相性の悪いライブラリ API
export const Table = (): JSX.Element => {
  const table = useReactTable({ data: [], columns: [] })
  return <div>{String(table !== undefined)}</div>
}
