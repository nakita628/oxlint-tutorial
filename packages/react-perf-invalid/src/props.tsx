// React の再レンダー要因になる props の違反サンプル

type Props = {
  items: Array<number>
  config: { retries: number }
  onClick: () => void
  slot: JSX.Element
}

const Child = ({ items, config, onClick, slot }: Props): JSX.Element => (
  <div onClick={onClick}>
    {items.length}
    {config.retries}
    {slot}
  </div>
)

export const NewArrayAsProp = (): JSX.Element => (
  // react-perf/jsx-no-new-array-as-prop: 配列リテラルを毎回作ると再レンダーの原因になる
  <Child
    items={[1, 2, 3]}
    config={{ retries: 1 }}
    onClick={(): void => undefined}
    slot={<span />}
  />
)

export const NewObjectAsProp = (): JSX.Element => {
  const items: Array<number> = []
  // react-perf/jsx-no-new-object-as-prop: オブジェクトリテラルを毎回作らない
  // react-perf/jsx-no-new-function-as-prop: 関数を毎回作らない
  // react-perf/jsx-no-jsx-as-prop: JSX を props として毎回作らない
  return (
    <Child items={items} config={{ retries: 1 }} onClick={(): void => undefined} slot={<span />} />
  )
}
