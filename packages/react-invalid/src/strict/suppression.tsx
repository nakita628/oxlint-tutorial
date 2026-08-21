// react/rule-suppression: React のルールを disable コメントで抑制しない
export const Suppressed = ({ value }: { value: number }): JSX.Element => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const doubled = value * 2
  return <div>{doubled}</div>
}
