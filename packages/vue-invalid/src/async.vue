<script lang="ts">
// await の後にライフサイクル API を呼ぶ違反サンプル
import { onMounted, watch, ref } from 'vue'

export default {
  name: 'AsyncSetup',

  async setup() {
    const count = ref<number>(0)

    await Promise.resolve()

    // vue/no-lifecycle-after-await: await の後に onMounted を登録しても効かない
    onMounted(() => {
      void 0
    })

    // vue/no-watch-after-await: await の後の watch も登録されない
    watch(count, () => {
      void 0
    })

    return { count }
  },
}
</script>
