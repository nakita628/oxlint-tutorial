// コンポーネント定義まわりの違反サンプル
import { createContext, forwardRef, memo, useState, type ReactNode } from 'react'

// react/function-component-definition: アロー関数に統一する設定にしているのに function 宣言を使っている
export function Title(props: { text: string }): JSX.Element {
  return <h1>{props.text}</h1>
}

// react/display-name: memo で包んだ無名コンポーネントは表示名を持たない
export const Anonymous = memo(() => <span>anonymous</span>)

// react/forward-ref-uses-ref: forwardRef なのに ref を使っていない
export const Forwarded = forwardRef<HTMLDivElement, { text: string }>((props) => (
  <div>{props.text}</div>
))

// react/hook-use-state: useState の戻り値は [value, setValue] の形で受け取る
export const Counter = (): JSX.Element => {
  const [count, updateCount] = useState(0)
  return (
    <button type="button" onClick={(): void => updateCount(count + 1)}>
      {count}
    </button>
  )
}

// react/no-object-type-as-default-prop: オブジェクトを既定値にすると毎回別インスタンスになる
export const WithDefaults = ({
  options = { retries: 3 },
}: {
  options?: { retries: number }
}): JSX.Element => <div>{options.retries}</div>

const ThemeContext = createContext({ theme: 'light' })

// react/jsx-no-constructed-context-values: value にリテラルを直接渡すと毎回再レンダーされる
export const Provider = ({ children }: { children: ReactNode }): JSX.Element => (
  <ThemeContext.Provider value={{ theme: 'dark' }}>{children}</ThemeContext.Provider>
)

// react/no-unstable-nested-components: コンポーネントの中でコンポーネントを定義しない
export const Outer = (): JSX.Element => {
  const Inner = (): JSX.Element => <span>inner</span>
  return (
    <div>
      <Inner />
    </div>
  )
}

// react/static-components: レンダーのたびに同じ内容を作り直している
export const Static = (): JSX.Element => {
  const element = <span>static</span>
  return <div>{element}</div>
}

// react/only-export-components: コンポーネント以外も export している
export const notAComponent = 1
