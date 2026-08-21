<script lang="ts">
// slots.vue の適合版
import { nextTick } from 'vue'

export default {
  name: 'SlotsAndRouter',

  data() {
    // vue/no-computed-properties-in-data: data では computed を参照しない
    return { label: 'label' }
  },

  computed: {
    upperLabel(): string {
      return this.label.toUpperCase()
    },
  },

  // vue/no-this-in-before-route-enter: this ではなく引数の vm を使う
  beforeRouteEnter(to: unknown, from: unknown, next: (callback: unknown) => void): void {
    void to
    void from
    next(() => undefined)
  },

  async mounted(): Promise<void> {
    // vue/valid-next-tick: nextTick は await する
    await nextTick()
  },

  // vue/require-slots-as-functions: $slots のメンバーは関数として呼ぶ
  // vue/no-multiple-slot-args: スロットの引数はひとつだけ
  render(): unknown {
    const children = this.$slots.default?.()
    return [children, this.$slots.item?.({ value: 'first' })]
  },
}
</script>
