<script lang="ts">
// options-api.vue の適合版（script ブロックは TypeScript）
export default {
  // vue/component-definition-name-casing: コンポーネント名は PascalCase
  name: 'OptionsApi',

  // vue/no-deprecated-data-object-declaration, vue/no-shared-component-data:
  // data は関数で返す
  data() {
    return { value: 1 }
  },

  props: {
    // vue/prop-name-casing: props 名は camelCase
    // vue/require-prop-types, vue/require-prop-type-constructor: 型はコンストラクタで書く
    // vue/require-default-prop: 必須でない props には既定値を付ける
    myProp: { type: String, default: '' },
    label: { type: String, default: '' },
    // vue/no-required-prop-with-default: required なら既定値は書かない
    both: { type: Number, required: true },
  },

  computed: {
    // vue/no-dupe-keys: data / props と重複しないキーにする
    // vue/return-in-computed-property: 値を返す
    // vue/no-side-effects-in-computed-properties: 副作用を起こさない
    // vue/no-async-in-computed-properties: 非同期にしない
    doubled(): number {
      return this.value * 2
    },
  },

  watch: {
    // vue/no-arrow-functions-in-watch: 通常のメソッド構文で書く
    value(): void {
      void 0
    },
  },

  methods: {
    // vue/no-reserved-keys: $ で始まる名前は使わない
    emitChange(): void {
      void 0
    },

    // vue/next-tick-style: $nextTick は Promise として使う
    async update(): Promise<void> {
      await this.$nextTick()
    },
  },
}
</script>

<template>
  <div>{{ doubled }}</div>
</template>
