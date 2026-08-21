// index.tsx の適合版
// nextjs/no-document-import-in-page: ページでは next/document を import しない
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'

// nextjs/no-typos: 正しい名前で export する
export function getStaticProps(): { props: Record<string, never> } {
  return { props: {} }
}

export default function Home(): JSX.Element {
  return (
    <div>
      {/* nextjs/no-head-element: next/head を使う */}
      {/* nextjs/no-page-custom-font: フォントは _document 側でまとめて読み込む */}
      <Head>
        <title>oxlint tutorial</title>
      </Head>
      {/* nextjs/no-html-link-for-pages: 内部リンクは next/link */}
      <Link href="/about">about</Link>
      {/* nextjs/no-img-element: next/image を使う */}
      <Image src="/a.png" alt="a" width={100} height={100} />
      {/* nextjs/inline-script-id: インライン Script には id を付ける */}
      {/* nextjs/no-before-interactive-script-outside-document: 既定の strategy を使う */}
      <Script id="inline-script">{`globalThis.console.info(1)`}</Script>
      {/* nextjs/next-script-for-ga, nextjs/no-sync-scripts, nextjs/no-unwanted-polyfillio:
          外部スクリプトも next/script で読み込む */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" id="ga" />
    </div>
  )
}
