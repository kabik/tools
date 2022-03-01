<template>
  <div class="game-cell"
    :style="{
      backgroundColor: isAlive ? 'green' : 'lime',
      display: 'table-cell',
      height: '5px',
      width: '5px'
    }"
  >
  </div>
</template>

<script>
export default {
  props: {
    //isAlive: { type: Boolean }
  },
  data () {
    return {
      isAlive: Math.random() < 1/3
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

</style>
