// props.tsx の適合版
import { useCallback, useMemo } from 'react'

type Props = {
  items: Array<number>
  config: { retries: number }
  onClick: () => void
  slot: JSX.Element
}

const Child = ({ items, config, onClick, slot }: Props): JSX.Element => (
  <button type="button" onClick={onClick}>
    {items.length}
    {config.retries}
    {slot}
  </button>
)

// react-perf/jsx-no-new-array-as-prop: 参照が変わらない値をモジュールスコープに置く
const defaultItems: Array<number> = [1, 2, 3]
const defaultConfig = { retries: 1 }
const defaultSlot = <span />

export const StableProps = (): JSX.Element => {
  // react-perf/jsx-no-new-function-as-prop: useCallback で参照を固定する
  const handleClick = useCallback((): void => undefined, [])

  return (
    <Child items={defaultItems} config={defaultConfig} onClick={handleClick} slot={defaultSlot} />
  )
}

export const MemoizedProps = ({ retries }: { retries: number }): JSX.Element => {
  // react-perf/jsx-no-new-object-as-prop: useMemo で参照を固定する
  const config = useMemo(() => ({ retries }), [retries])
  const handleClick = useCallback((): void => undefined, [])

  return <Child items={defaultItems} config={config} onClick={handleClick} slot={defaultSlot} />
}
