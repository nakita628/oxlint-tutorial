'use client'

// nextjs/no-async-client-component: クライアントコンポーネントは同期関数にする
export default function ClientComponent({ value }: { value: number }): JSX.Element {
  return <div>{value}</div>
}
