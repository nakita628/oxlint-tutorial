// _document.tsx の適合版
// nextjs/no-head-import-in-document: _document では next/document の Head を使う
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="ja">
        {/* nextjs/no-duplicate-head: Head は 1 つだけ */}
        {/* nextjs/no-title-in-document-head: title はページ側の next/head で指定する */}
        <Head>
          {/* nextjs/google-font-preconnect: preconnect を付ける */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* nextjs/google-font-display: display を指定する */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
