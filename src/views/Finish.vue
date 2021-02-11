<template>
  <div>
    La partie est terminée
    <span v-if="$store.state.win == 3">Vous avez gagné</span>
    <span v-else>Vous avez Perdu</span>
    <it-button @click="$store.dispatch('returnMenu')">Menu</it-button>
  </div>
</template>

<script>
export default {
name: "Finish.vue"
}
</script>

<style scoped>

</style>