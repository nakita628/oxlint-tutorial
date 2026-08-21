<script lang="ts">
// Options API まわりの違反サンプル（script ブロックは TypeScript）
export default {
  // vue/component-definition-name-casing: コンポーネント名は PascalCase にする
  name: 'options-api',

  // vue/no-deprecated-data-object-declaration: data はオブジェクトではなく関数で返す
  // vue/no-shared-component-data: data を関数にしないと全インスタンスで共有される
  data: {
    value: 1,
    // vue/no-computed-properties-in-data: data の中で computed を参照しない
    doubled: 2,
  },

  // vue/no-dupe-keys: data / props / computed でキーが重複している
  props: {
    // vue/prop-name-casing: props 名は camelCase にする
    'my-prop': { type: String, default: '' },

    // vue/require-prop-type-constructor: 型は文字列ではなくコンストラクタで書く
    label: { type: 'String' },
    // vue/require-default-prop: 必須でない props には既定値を付ける
    optional: { type: Number },
    // vue/no-required-prop-with-default: required な props に既定値は不要
    both: { type: Number, required: true, default: 1 },
    // vue/no-reserved-props: key / ref などは props 名に使えない
    key: { type: String, default: '' },
  },

  computed: {
    // vue/return-in-computed-property: computed は値を返す
    value(): void {
      void 0
    },
    // vue/no-side-effects-in-computed-properties: computed で状態を書き換えない
    tripled(): number {
      this.value = 3
      return 3
    },
    // vue/no-async-in-computed-properties: computed は非同期にできない
    async fetched(): Promise<number> {
      return await Promise.resolve(1)
    },
  },

  watch: {
    // vue/no-arrow-functions-in-watch: watch のハンドラはアロー関数にしない
    value: () => {
      void 0
    },
  },

  // vue/no-reserved-keys: $ で始まるキーは Vue が予約している
  methods: {
    $emit(): void {
      void 0
    },
    // vue/next-tick-style: $nextTick は Promise で使う設定にしている
    update(): void {
      this.$nextTick(() => {
        void 0
      })
    },
  },
}
</script>

<template>
  <div>{{ value }}</div>
</template>
