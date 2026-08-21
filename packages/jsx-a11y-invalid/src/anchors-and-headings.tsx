// リンク・見出しまわりの違反サンプル

// jsx-a11y/anchor-has-content: a には内容が必要
export const EmptyAnchor = (): JSX.Element => <a href="/" />

// jsx-a11y/anchor-is-valid: href が無い a はリンクとして機能しない
export const InvalidAnchor = (): JSX.Element => <a>link</a>

// jsx-a11y/anchor-ambiguous-text: 「click here」のような曖昧な文言は避ける
export const AmbiguousAnchor = (): JSX.Element => <a href="/docs">click here</a>

// jsx-a11y/heading-has-content: 見出しには内容が必要
export const EmptyHeading = (): JSX.Element => <h1 />

// jsx-a11y/html-has-lang: html には lang を付ける
export const NoHtmlLang = (): JSX.Element => <html />

// jsx-a11y/lang: lang には正しい言語コードを指定する
export const BadLang = (): JSX.Element => <html lang="japanese" />
