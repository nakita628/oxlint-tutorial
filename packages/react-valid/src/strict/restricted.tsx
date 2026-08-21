// 同時に有効化できないルール群の適合版
import React, { useState } from 'react'

// react/react-in-jsx-scope: React を import する
void React

// react/prefer-function-component, react/no-set-state:
// クラスコンポーネントではなく関数コンポーネントと useState を使う
// react/no-multi-comp: 1 ファイルにコンポーネントはひとつだけ
// react/jsx-no-literals: JSX 内の文字列は式で囲む
// react/forbid-elements, react/forbid-dom-props, react/forbid-component-props:
// 禁止された要素・props は使わない
export const FunctionComponent = (): JSX.Element => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button type="button" onClick={(): void => setCount(count + 1)} aria-label="count">
        {String(count)}
      </button>
    </div>
  )
}
