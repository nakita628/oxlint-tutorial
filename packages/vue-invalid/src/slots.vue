<script lang="ts">
// スロット・ルーター・nextTick まわりの違反サンプル
import { nextTick } from 'vue'

export default {
  name: 'SlotsAndRouter',

  data() {
    // vue/no-computed-properties-in-data: data の中で computed を参照している
    const label = this.upperLabel
    return { label }
  },

  computed: {
    upperLabel(): string {
      return 'label'
    },
  },

  // vue/no-this-in-before-route-enter: beforeRouteEnter では this を使えない
  beforeRouteEnter(): void {
    void this.$route
  },

  async mounted(): Promise<void> {
    // vue/valid-next-tick: nextTick は await するかコールバックを渡す
    nextTick()
    await Promise.resolve()
  },

  // vue/require-slots-as-functions: this.$slots のメンバーは関数として呼ぶ
  // vue/no-multiple-slot-args: スロットに渡す引数はひとつだけ
  render(): unknown {
    const children = this.$slots.default
    return [children, this.$scopedSlots.item('first', 'second')]
  },
}
</script>
