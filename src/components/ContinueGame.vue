<template>
  <div>

    <span v-if="$store.state.isWin">Tu as gagné</span>
    <span v-else-if="$store.state.isWin == null">Egalité</span>
    <span v-else>Tu as perdu</span>
    <br>
    <span>{{ play }} Vs {{ botPlay }}</span>

    <it-button @click="$store.dispatch('continueGame')"> Continuer </it-button>
  </div>
</template>

<script>
export default {
  name: "ContinueGame",
  data() {
    return {
      play: "",
      botPlay: ""
    }
  },
  created() {
    this.play = localStorage.getItem('player')
    this.botPlay = localStorage.getItem('bot')
  }
}
</script>

<style scoped>

</style>