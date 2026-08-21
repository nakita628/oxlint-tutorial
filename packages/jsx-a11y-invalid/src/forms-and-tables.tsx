// フォーム・テーブルまわりの違反サンプル

// jsx-a11y/label-has-associated-control: label には対応するコントロールが必要
export const LonelyLabel = (): JSX.Element => <label>name</label>

// jsx-a11y/control-has-associated-label: コントロールにはラベルが必要
export const UnlabeledControl = (): JSX.Element => (
  <button type="button" aria-hidden={false} />
)

// jsx-a11y/autocomplete-valid: autocomplete の値が不正
export const BadAutocomplete = (): JSX.Element => (
  <input type="text" autoComplete="nope" aria-label="name" />
)

// jsx-a11y/scope: scope は th 要素にだけ指定できる
export const BadScope = (): JSX.Element => (
  <table>
    <tbody>
      <tr>
        <td scope="col">cell</td>
      </tr>
    </tbody>
  </table>
)
