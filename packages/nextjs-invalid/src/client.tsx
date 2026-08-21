'use client'

// nextjs/no-async-client-component: クライアントコンポーネントは async にできない
export default async function ClientComponent(): Promise<JSX.Element> {
  const value = await Promise.resolve(1)
  return <div>{value}</div>
}
