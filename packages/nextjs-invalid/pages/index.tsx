// ページコンポーネントまわりの違反サンプル
// nextjs/no-document-import-in-page: next/document はページから import できない
import { Head as DocumentHead } from 'next/document'
import Head from 'next/head'
import Script from 'next/script'

void DocumentHead

// nextjs/no-typos: getStaticProps などの綴り間違い
export function getStaticprops(): { props: Record<string, never> } {
  return { props: {} }
}

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        {/* nextjs/no-page-custom-font: ページ単位のカスタムフォント読み込み */}
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* nextjs/no-head-element: 生の head 要素ではなく next/head を使う */}
      <head />
      {/* nextjs/no-html-link-for-pages: 内部リンクは next/link を使う */}
      <a href="/about">about</a>
      {/* nextjs/no-img-element: img ではなく next/image を使う */}
      <img src="/a.png" alt="a" />
      {/* nextjs/inline-script-id: インライン Script には id が必要 */}
      <Script dangerouslySetInnerHTML={{ __html: 'globalThis.console.info(1)' }} />
      {/* nextjs/no-before-interactive-script-outside-document:
          beforeInteractive は _document でしか使えない */}
      <Script src="/b.js" strategy="beforeInteractive" id="b" />
      {/* nextjs/next-script-for-ga: Google Analytics は next/script で読み込む */}
      <script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
    </div>
  )
}
