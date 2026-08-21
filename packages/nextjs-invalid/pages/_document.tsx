// _document まわりの違反サンプル
import Document, { Head as DocumentHead, Html, Main, NextScript } from 'next/document'
// nextjs/no-head-import-in-document: _document では next/document の Head を使う
import Head from 'next/head'
import Script from 'next/script'

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        {/* nextjs/no-duplicate-head: Head は 1 つだけにする */}
        <Head>
          {/* nextjs/no-title-in-document-head: title は next/head 側で指定する */}
          <title>oxlint</title>
          {/* nextjs/google-font-display: display=optional などを指定する */}
          <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
          {/* nextjs/google-font-preconnect: fonts.gstatic.com には preconnect を付ける */}
          <link href="https://fonts.gstatic.com" />
          {/* nextjs/no-css-tags: CSS は import で読み込む */}
          <link rel="stylesheet" href="/styles.css" />
          {/* nextjs/no-sync-scripts: 同期読み込みの script は避ける */}
          <script src="https://example.com/a.js" />
          {/* nextjs/no-unwanted-polyfillio: Next.js が同梱する polyfill は不要 */}
          <script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.map" />
          {/* nextjs/no-script-component-in-head: Head の中で next/script は使えない */}
          <Script src="/a.js" id="a" />
          {/* nextjs/no-styled-jsx-in-document: _document では styled-jsx を使えない */}
          <style jsx>{`
            body {
              margin: 0;
            }
          `}</style>
        </Head>
        {/* nextjs/no-title-in-document-head: next/document の Head に title を書かない */}
        <DocumentHead>
          <title>oxlint</title>
        </DocumentHead>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
