<script lang="ts">
// deprecated.vue の適合版
// vue/no-deprecated-vue-config-keycodes: Vue.config.keyCodes は使わない

export default {
  name: 'DeprecatedApis',

  // vue/no-deprecated-model-definition: model オプションは使わない
  props: {
    value: { type: String, default: '' },
    // vue/no-deprecated-props-default-this: default では this を使わない
    label: {
      type: String,
      default(): string {
        return ''
      },
    },
  },

  // vue/no-deprecated-destroyed-lifecycle: unmounted を使う
  unmounted(): void {
    // vue/no-deprecated-events-api, vue/no-deprecated-delete-set:
    // $off / $delete は使わない
    void 0
  },

  // vue/require-render-return: render は値を返す
  render(): unknown {
    return undefined
  },
}
</script>
