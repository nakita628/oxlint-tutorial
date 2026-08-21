<script lang="ts">
// async.vue の適合版
import { onMounted, watch, ref } from 'vue'

export default {
  name: 'AsyncSetup',

  async setup() {
    const count = ref<number>(0)

    // vue/no-lifecycle-after-await, vue/no-watch-after-await:
    // ライフサイクル登録と watch は await より前に書く
    onMounted(() => {
      void 0
    })

    watch(count, () => {
      void 0
    })

    await Promise.resolve()

    return { count }
  },
}
</script>
