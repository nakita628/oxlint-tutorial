// dom.tsx の適合版

// react/button-has-type: type を明示する
export const Button = (): JSX.Element => <button type="button">click</button>

// react/no-unknown-property: className を使う
export const KnownProperty = (): JSX.Element => <div className="container" />

// react/style-prop-object: style にはオブジェクトを渡す
export const StyleObject = (): JSX.Element => <div style={{ color: 'red' }} />

// react/void-dom-elements-no-children: void 要素に子を持たせない
export const VoidElement = (): JSX.Element => <img src="/a.png" alt="a" />

// react/no-children-prop: children は JSX の子として渡す
export const ChildrenAsChild = (): JSX.Element => <div>text</div>

// react/no-danger, react/no-danger-with-children: dangerouslySetInnerHTML を使わない
export const NoDanger = (): JSX.Element => <div>child</div>

// react/jsx-no-target-blank: rel="noreferrer" を付ける
export const ExternalLink = (): JSX.Element => (
  <a href="https://example.com" target="_blank" rel="noreferrer">
    link
  </a>
)

// react/jsx-no-script-url: 通常の URL を使う
export const NormalUrl = (): JSX.Element => <a href="https://oxc.rs">link</a>

// react/iframe-missing-sandbox: sandbox を指定する
export const Frame = (): JSX.Element => (
  <iframe title="frame" src="/a.html" sandbox="allow-scripts" />
)

// react/checked-requires-onchange-or-readonly: readOnly を付ける
export const Checked = (): JSX.Element => (
  <input type="checkbox" checked readOnly aria-label="checked" />
)
