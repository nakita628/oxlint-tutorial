// hooks.tsx の適合版
import { memo, useCallback, useEffect, useState } from 'react'

export const Effect = ({ id }: { id: string }): JSX.Element => {
  // react/exhaustive-deps, react/exhaustive-effect-dependencies: 依存を網羅する
  // react/set-state-in-effect, react/no-deriving-state-in-effects:
  // effect は外部システムとの同期にだけ使い、state の導出には使わない
  useEffect(() => {
    globalThis.document.title = id
  }, [id])

  return <span>{id}</span>
}

export const Conditional = ({ enabled }: { enabled: boolean }): JSX.Element => {
  // react/rules-of-hooks, react/hooks: フックはトップレベルで呼ぶ
  // react/hook-use-state: [value, setValue] の形で受け取る
  const [value, setValue] = useState('')
  const handleClick = useCallback((): void => setValue('clicked'), [])
  if (enabled) {
    return (
      <button type="button" onClick={handleClick}>
        {value}
      </button>
    )
  }
  return <span>disabled</span>
}

export const RenderSetState = (): JSX.Element => {
  // react/set-state-in-render: レンダー中ではなくイベントハンドラで setState する
  const [value, setValue] = useState(0)
  const handleClick = useCallback((): void => setValue((current) => current + 1), [])
  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  )
}

export const DerivedValue = ({ id }: { id: string }): JSX.Element => {
  // react/set-state-in-effect, react/no-deriving-state-in-effects:
  // props から求まる値はレンダー中に計算する
  const value = id.toUpperCase()
  return <span>{value}</span>
}

// react/no-this-in-sfc: props を引数から受け取る
export const ThisInSfc = (props: { bar: string }): JSX.Element => <div>{props.bar}</div>

// react/memo-dependencies: memo 化したコンポーネントには安定した props を渡す
const ChildInner = ({ onClick }: { onClick: () => void }): JSX.Element => (
  <button type="button" onClick={onClick} aria-label="child" />
)
ChildInner.displayName = 'Child'

const Child = memo(ChildInner)

export const MemoParent = (): JSX.Element => {
  const handleClick = useCallback((): void => undefined, [])
  return <Child onClick={handleClick} />
}
