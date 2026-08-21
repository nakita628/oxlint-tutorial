<script setup lang="ts">
// vue/no-expose-after-await: await の後の defineExpose は効かない
import { ref } from 'vue'

const count = ref<number>(0)

await Promise.resolve()

defineExpose({ count })
</script>

<template>
  <div>{{ count }}</div>
</template>
