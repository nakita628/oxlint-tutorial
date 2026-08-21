// aria.tsx の適合版

// jsx-a11y/aria-props: 正しい aria-* 属性を使う
export const KnownAriaProp = (): JSX.Element => <div aria-labelledby="id" />

// jsx-a11y/aria-proptypes: 値の型をそろえる
export const GoodAriaValue = (): JSX.Element => <div aria-hidden="true" />

// jsx-a11y/aria-role, jsx-a11y/prefer-tag-over-role:
// 対応する HTML タグが無い role（alert など）を使う
export const GoodRole = (): JSX.Element => <div role="alert">保存しました</div>

// jsx-a11y/aria-unsupported-elements: meta には aria 属性を付けない
export const SupportedAria = (): JSX.Element => <meta name="description" content="oxlint" />

// jsx-a11y/role-has-required-aria-props: role に必須の aria 属性を付ける
export const RequiredAria = (): JSX.Element => (
  <div role="scrollbar" aria-controls="panel" aria-valuenow={0} aria-label="スクロール位置" />
)

// jsx-a11y/role-supports-aria-props: role がサポートする aria 属性だけを使う
export const SupportedAriaProp = (): JSX.Element => (
  <div role="alert" aria-live="polite">
    保存しました
  </div>
)

// jsx-a11y/no-aria-hidden-on-focusable: フォーカスできる要素に aria-hidden を付けない
export const VisibleFocusable = (): JSX.Element => <a href="/docs">oxlint のドキュメント</a>

// jsx-a11y/aria-activedescendant-has-tabindex: tabIndex とセットで使う
export const ActiveDescendant = (): JSX.Element => (
  <div aria-activedescendant="item-1" tabIndex={0} role="tree" aria-label="tree" />
)

// jsx-a11y/no-redundant-roles: 冗長な role は指定しない
export const NoRedundantRole = (): JSX.Element => <button type="button">click</button>
