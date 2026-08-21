// DOM 属性まわりの違反サンプル

// react/button-has-type: button には type を明示する
export const Button = (): JSX.Element => <button>click</button>

// react/no-unknown-property: DOM に存在しない属性
export const UnknownProperty = (): JSX.Element => <div class="container" />

// react/style-prop-object: style には文字列ではなくオブジェクトを渡す
export const StyleString = (): JSX.Element => <div style="color: red" />

// react/void-dom-elements-no-children: img などの void 要素は子を持てない
export const VoidChildren = (): JSX.Element => <img src="/a.png" alt="a">child</img>

// react/no-children-prop: children は props ではなく JSX の子として渡す
export const ChildrenProp = (): JSX.Element => <div children="text" />

// react/no-danger, react/no-danger-with-children:
// dangerouslySetInnerHTML と子要素は同時に指定できない
export const Danger = (): JSX.Element => (
  <div dangerouslySetInnerHTML={{ __html: '<b>a</b>' }}>child</div>
)

// react/jsx-no-target-blank: target="_blank" には rel="noreferrer" を付ける
export const ExternalLink = (): JSX.Element => (
  <a href="https://example.com" target="_blank">
    link
  </a>
)

// react/jsx-no-script-url: javascript: URL を使わない
export const ScriptUrl = (): JSX.Element => <a href="javascript:void(0)">link</a>

// react/iframe-missing-sandbox: iframe には sandbox を指定する
export const Frame = (): JSX.Element => <iframe title="frame" src="/a.html" />

// react/checked-requires-onchange-or-readonly: checked には onChange か readOnly が必要
export const Checked = (): JSX.Element => <input type="checkbox" checked />
