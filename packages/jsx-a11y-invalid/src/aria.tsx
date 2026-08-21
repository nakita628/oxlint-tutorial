// ARIA 属性まわりの違反サンプル

// jsx-a11y/aria-props: 存在しない aria-* 属性
export const UnknownAriaProp = (): JSX.Element => <div aria-labeledby="id" />

// jsx-a11y/aria-proptypes: aria 属性の値の型が不正
export const BadAriaValue = (): JSX.Element => <div aria-hidden="yes" />

// jsx-a11y/aria-role: 存在しない role
export const BadRole = (): JSX.Element => <div role="datepicker" />

// jsx-a11y/aria-unsupported-elements: meta などは aria 属性をサポートしない
export const UnsupportedAria = (): JSX.Element => <meta aria-hidden="true" />

// jsx-a11y/role-has-required-aria-props: role に必須の aria 属性が足りない
export const MissingRequiredAria = (): JSX.Element => <div role="checkbox" />

// jsx-a11y/role-supports-aria-props: role がサポートしない aria 属性を指定している
export const UnsupportedAriaProp = (): JSX.Element => <div role="link" aria-checked="true" />

// jsx-a11y/no-aria-hidden-on-focusable: フォーカスできる要素に aria-hidden を付けない
export const HiddenFocusable = (): JSX.Element => (
  <a href="/" aria-hidden="true">
    link
  </a>
)

// jsx-a11y/aria-activedescendant-has-tabindex: aria-activedescendant には tabIndex が必要
export const ActiveDescendant = (): JSX.Element => <div aria-activedescendant="item-1" />

// jsx-a11y/prefer-tag-over-role: role より意味のある HTML タグを使う
export const RoleOverTag = (): JSX.Element => <div role="button">click</div>

// jsx-a11y/no-redundant-roles: 要素が既に持っている role は指定しない
export const RedundantRole = (): JSX.Element => <button type="button" role="button" />
