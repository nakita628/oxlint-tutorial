<script setup lang="ts">
// マクロの使い方まわりの違反サンプル
import { nextTick } from 'vue'

// vue/valid-define-props: defineProps は 1 回だけ呼べる
const props = defineProps<{ label: string }>()
const extra = defineProps<{ other: string }>()

// vue/valid-define-emits: defineEmits も 1 回だけ
const emit = defineEmits<{ change: [value: string] }>()
const emit2 = defineEmits<{ other: [value: string] }>()

// vue/valid-define-options: defineOptions に props / emits は書けない
defineOptions({ props: ['label'] })

// vue/return-in-emits-validator: emits のバリデータは真偽値を返す
// vue/valid-next-tick: nextTick は Promise を await するか、コールバックを渡す
nextTick()

emit('change', props.label)
void extra
void emit2
</script>

<template>
  <div>{{ props.label }}</div>
</template>
