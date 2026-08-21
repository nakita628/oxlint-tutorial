// anchors-and-headings.tsx の適合版

// jsx-a11y/anchor-has-content: a には内容を持たせる
export const AnchorWithContent = (): JSX.Element => <a href="/">home</a>

// jsx-a11y/anchor-is-valid: href を付ける
export const ValidAnchor = (): JSX.Element => <a href="/docs">documentation</a>

// jsx-a11y/anchor-ambiguous-text: 具体的な文言にする
export const ClearAnchor = (): JSX.Element => <a href="/docs">oxlint のドキュメント</a>

// jsx-a11y/heading-has-content: 見出しには内容を持たせる
export const HeadingWithContent = (): JSX.Element => <h1>oxlint tutorial</h1>

// jsx-a11y/html-has-lang, jsx-a11y/lang: 正しい言語コードを指定する
export const HtmlWithLang = (): JSX.Element => <html lang="ja" />
