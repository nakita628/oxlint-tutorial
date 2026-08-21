<script setup lang="ts">
// validators.vue の適合版
import { nextTick } from 'vue'

// vue/valid-define-props: defineProps は 1 回だけ
// vue/define-props-destructuring: props は分割代入で受け取る
const { label } = defineProps<{ label: string }>()

// vue/valid-define-emits: defineEmits も 1 回だけ
const emit = defineEmits<{ change: [value: string] }>()

// vue/valid-define-options: defineOptions には props / emits を書かない
defineOptions({ name: 'Validators' })

// vue/valid-next-tick: nextTick は await する
await nextTick()

emit('change', label)
</script>

<template>
  <div>{{ label }}</div>
</template>
