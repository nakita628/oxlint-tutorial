<script setup lang="ts">
// script setup まわりの違反サンプル
// vue/prefer-import-from-vue: '@vue/runtime-core' ではなく 'vue' から import する
import { ref } from '@vue/runtime-core'
// vue/no-import-compiler-macros: コンパイラマクロは import しない
import { defineProps, defineEmits } from 'vue'

// vue/define-props-declaration: 型ベースの宣言に統一する設定にしている
// vue/define-props-destructuring: props は分割代入で受け取る
// vue/max-props: props の数が多すぎる
const props = defineProps({
  first: { type: String, default: '' },
  second: { type: String, default: '' },
  third: { type: String, default: '' },
  fourth: { type: String, default: '' },
})

// vue/define-emits-declaration: emits も型ベースで宣言する設定にしている
const emit = defineEmits(['change'])

// vue/require-typed-ref: ref には型引数を付ける
const count = ref(null)

// vue/no-export-in-script-setup: script setup では export できない
export const exported = 1

emit('change')
</script>

<template>
  <div>{{ props.first }}{{ props.second }}{{ count }}</div>
</template>
