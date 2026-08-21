// suppression.tsx の適合版
// react/react-in-jsx-scope: React を import する
// react/rule-suppression: disable コメントで抑制せず、指摘そのものを直す
import React from 'react'

void React

export const Suppressed = ({ value }: { value: number }): JSX.Element => {
  const doubled = value * 2
  return <div>{String(doubled)}</div>
}
