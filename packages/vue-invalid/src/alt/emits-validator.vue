<script lang="ts">
// 別方針（Options API での emits 検証）の違反サンプル
export default {
  // vue/no-reserved-component-names: HTML の要素名は使えない
  name: 'Div',

  emits: {
    // vue/return-in-emits-validator: バリデータは真偽値を返す
    change(value: string): void {
      void value
    },
  },
}
</script>
