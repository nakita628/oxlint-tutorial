<script lang="ts">
// emits-validator.vue の適合版
// vue/require-default-export, vue/require-direct-export: 直接 default export する
export default {
  // vue/no-reserved-component-names: HTML の要素名は避ける
  name: 'ChangeNotifier',

  emits: {
    // vue/return-in-emits-validator: バリデータは真偽値を返す
    change(value: string): boolean {
      return typeof value === 'string'
    },
  },
}
</script>
