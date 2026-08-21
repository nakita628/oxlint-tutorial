// interactions.tsx の適合版

// jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions:
// 操作できる要素には button を使う
export const Clickable = (): JSX.Element => (
  <button type="button" onClick={(): void => undefined}>
    click
  </button>
)

// jsx-a11y/mouse-events-have-key-events: onMouseOver には onFocus も用意する
export const MouseAndKeyboard = (): JSX.Element => (
  <button
    type="button"
    onMouseOver={(): void => undefined}
    onFocus={(): void => undefined}
    onMouseOut={(): void => undefined}
    onBlur={(): void => undefined}
  >
    hover
  </button>
)

// jsx-a11y/no-noninteractive-element-interactions: 非対話要素にハンドラを付けない
export const NonInteractive = (): JSX.Element => <li>item</li>

// jsx-a11y/interactive-supports-focus: button ならフォーカスできる
export const Focusable = (): JSX.Element => (
  <button type="button" onClick={(): void => undefined}>
    focus
  </button>
)

// jsx-a11y/no-interactive-element-to-noninteractive-role: role を付け替えない
export const KeepsInteractive = (): JSX.Element => <button type="button">button</button>

// jsx-a11y/no-noninteractive-element-to-interactive-role: role を付け替えない
export const KeepsNoninteractive = (): JSX.Element => <ul />

// jsx-a11y/no-noninteractive-tabindex: 非対話要素に tabIndex を付けない
export const NoTabIndex = (): JSX.Element => <div />

// jsx-a11y/tabindex-no-positive: tabIndex は 0 か -1 にする
export const ZeroTabIndex = (): JSX.Element => (
  <button type="button" tabIndex={0}>
    tab
  </button>
)

// jsx-a11y/no-access-key: accessKey は使わない
export const NoAccessKey = (): JSX.Element => <div />

// jsx-a11y/no-autofocus: autoFocus は使わない
export const NoAutoFocus = (): JSX.Element => <input type="text" aria-label="name" />
