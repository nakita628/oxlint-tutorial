<script setup lang="ts">
// vue/no-expose-after-await: defineExpose は await より前に呼ぶ
import { ref } from 'vue'

const count = ref<number>(0)

defineExpose({ count })

await Promise.resolve()
</script>

<template>
  <div>{{ count }}</div>
</template>
