// forms-and-tables.tsx の適合版

// jsx-a11y/label-has-associated-control: label にコントロールを紐付ける
export const LabeledInput = (): JSX.Element => (
  <label htmlFor="name">
    name
    <input id="name" type="text" />
  </label>
)

// jsx-a11y/control-has-associated-label: コントロールにラベルを付ける
export const LabeledControl = (): JSX.Element => (
  <button type="button" aria-label="close">
    ×
  </button>
)

// jsx-a11y/autocomplete-valid: 正しい autocomplete の値を使う
export const GoodAutocomplete = (): JSX.Element => (
  <input type="text" autoComplete="name" aria-label="name" />
)

// jsx-a11y/scope: scope は th 要素にだけ指定する
export const GoodScope = (): JSX.Element => (
  <table>
    <tbody>
      <tr>
        <th scope="col">header</th>
      </tr>
    </tbody>
  </table>
)
