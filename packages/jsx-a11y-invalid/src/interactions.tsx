// 操作・フォーカスまわりの違反サンプル

// jsx-a11y/click-events-have-key-events: onClick にはキーボード操作も用意する
// jsx-a11y/no-static-element-interactions: 静的要素にハンドラを付けない
export const ClickOnly = (): JSX.Element => <div onClick={(): void => undefined} />

// jsx-a11y/mouse-events-have-key-events: onMouseOver には onFocus も用意する
export const MouseOnly = (): JSX.Element => (
  <div
    role="button"
    tabIndex={0}
    onMouseOver={(): void => undefined}
    onClick={(): void => undefined}
    onKeyDown={(): void => undefined}
  />
)

// jsx-a11y/no-noninteractive-element-interactions: 非対話要素にハンドラを付けない
export const NonInteractiveHandler = (): JSX.Element => (
  <li onClick={(): void => undefined} onKeyDown={(): void => undefined} />
)

// jsx-a11y/interactive-supports-focus: 対話的な role にはフォーカスを付ける
export const NoFocus = (): JSX.Element => (
  <div role="button" onClick={(): void => undefined} onKeyDown={(): void => undefined} />
)

// jsx-a11y/no-interactive-element-to-noninteractive-role: 対話要素に非対話 role を付けない
export const InteractiveToNoninteractive = (): JSX.Element => (
  <button type="button" role="article" />
)

// jsx-a11y/no-noninteractive-element-to-interactive-role: 非対話要素に対話 role を付けない
export const NoninteractiveToInteractive = (): JSX.Element => <ul role="button" />

// jsx-a11y/no-noninteractive-tabindex: 非対話要素に tabIndex を付けない
export const NoninteractiveTabIndex = (): JSX.Element => <div tabIndex={0} />

// jsx-a11y/tabindex-no-positive: 正の tabIndex は使わない
export const PositiveTabIndex = (): JSX.Element => <button type="button" tabIndex={1} />

// jsx-a11y/no-access-key: accessKey はスクリーンリーダーと衝突する
export const AccessKey = (): JSX.Element => <div accessKey="k" />

// jsx-a11y/no-autofocus: autoFocus は使わない
export const AutoFocus = (): JSX.Element => <input autoFocus />
