<script lang="ts">
// vue/require-prop-types: オブジェクト形式で型を指定する
export default {
  name: 'PropTypes',

  props: {
    first: { type: String, default: '' },
    second: { type: String, default: '' },
  },
}
</script>
