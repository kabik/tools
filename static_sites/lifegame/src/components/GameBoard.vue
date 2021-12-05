<template>
  <div class="game-board" :style="{border: 'solid 1px'}">
    <div v-for="(row, index) in cells" :key="index" :style="{display: 'table'}">
      <game-cell class="game-cell" v-for="(cell, index) in row" :key="index" />
    </div>
  </div>
</template>

<script>
import GameCell from './GameCell.vue'

const W = 200
const H = 80

export default {
  components: { GameCell },
  data () {
    return {
      cells: [...Array(H)].map(() => Array(W))
    }
  },
  computed: {
  }
}
</script>
