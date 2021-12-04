<template>
  <div class="game-cell"
    @click="$emit('clik')"
    :style="{
      backgroundColor: owner === 'red' ? `red` : 'blue'
    }"
  >
  </div>
</template>

<script>
export default {
  props: {
    owner: { type: String }
  }
}
</script>

<style lang="scss" scoped>

</style>
