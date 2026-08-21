<script lang="ts">
// Vue 2 から非推奨になった API の違反サンプル
import Vue from 'vue'

// vue/no-deprecated-vue-config-keycodes: Vue.config.keyCodes は廃止された
Vue.config.keyCodes = { enter: 13 }

export default {
  name: 'DeprecatedApis',

  // vue/no-deprecated-model-definition: model オプションは廃止された
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: { type: String, default: '' },
    // vue/no-deprecated-props-default-this: default 関数の中で this は使えない
    label: {
      type: String,
      default(): string {
        return this.value
      },
    },
  },

  // vue/no-deprecated-destroyed-lifecycle: destroyed は unmounted に置き換える
  destroyed(): void {
    // vue/no-deprecated-events-api: $on / $off / $once は廃止された
    this.$off('change')
    // vue/no-deprecated-delete-set: $delete / $set は廃止された
    this.$delete(this.$data, 'value')
  },

  // vue/require-render-return: render は必ず値を返す
  render(): void {
    void 0
  },
}
</script>
