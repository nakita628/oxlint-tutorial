<script setup lang="ts">
// script-setup.vue の適合版
// vue/prefer-import-from-vue: 'vue' から import する
// vue/no-import-compiler-macros: コンパイラマクロは import しない
import { ref } from 'vue'

// vue/define-props-declaration: 型ベースで宣言する
// vue/define-props-destructuring: props は分割代入で受け取る
// vue/max-props: props の数を上限内に収める
const { first, second } = defineProps<{
  first: string
  second: string
}>()

// vue/define-emits-declaration: emits も型ベースで宣言する
const emit = defineEmits<{ change: [value: string] }>()

// vue/require-typed-ref: ref には型引数を付ける
const count = ref<number>(0)

// vue/no-export-in-script-setup: script setup では export しない
emit('change', first)
</script>

<template>
  <div>{{ first }}{{ second }}{{ count }}</div>
</template>
