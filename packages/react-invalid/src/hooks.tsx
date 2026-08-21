// フックまわりの違反サンプル
import { memo, useCallback, useEffect, useState } from 'react'

export const Effect = ({ id }: { id: string }): JSX.Element => {
  const [value, setValue] = useState('')

  // react/exhaustive-deps, react/exhaustive-effect-dependencies:
  // 依存配列に id が含まれていない
  useEffect(() => {
    setValue(id)
  }, [])

  return <span>{value}</span>
}

export const Conditional = ({ enabled }: { enabled: boolean }): JSX.Element => {
  // react/rules-of-hooks, react/hooks: 条件分岐の中でフックを呼んではいけない
  if (enabled) {
    const [value] = useState('')
    return <span>{value}</span>
  }
  return <span>disabled</span>
}

export const RenderSetState = (): JSX.Element => {
  const [value, setValue] = useState(0)
  // react/set-state-in-render: レンダー中の setState は無限ループになる
  setValue(value + 1)
  return <span>{value}</span>
}

export const EffectSetState = ({ id }: { id: string }): JSX.Element => {
  const [value, setValue] = useState('')
  // react/set-state-in-effect, react/no-deriving-state-in-effects:
  // props から求まる値は effect ではなくレンダー中に計算する
  useEffect(() => {
    setValue(id.toUpperCase())
  }, [id])
  return <span>{value}</span>
}

// react/no-this-in-sfc: 関数コンポーネントの中で this を使わない
export function ThisInSfc(props: { bar: string }): JSX.Element {
  void props
  return <div>{this.props.bar}</div>
}

// react/memo-dependencies: memo 化したコンポーネントに不安定な props を渡している
const Child = memo(({ onClick }: { onClick: () => void }): JSX.Element => (
  <button type="button" onClick={onClick} />
))

export const MemoParent = (): JSX.Element => {
  const handleClick = useCallback((): void => undefined, [])
  return <Child onClick={handleClick} />
}
