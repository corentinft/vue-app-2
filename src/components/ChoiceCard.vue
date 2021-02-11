<template>
  <div>
    Choisissez une carte à jouer !
    <Summary />

    <div v-for="(element, index) in listElements" :key="index">
      <it-button @click="play(element.value)"> {{ element.label }} </it-button>
    </div>
  </div>
</template>

<script>
import Summary from "./Summary"

export default {
  name: "choiceCard",

  components: {
    Summary
  },

  data() {
    return {
      listElements: [
        {
          "value": "stone",
          "label": "Pierre"
        },
        {
          "value": "paper",
          "label": "Papier"
        },
        {
          "value": "scissors",
          "label": "Ciseaux"
        },
      ]
    }
  },

  methods: {
    play(element) {
      this.$store.dispatch('getPlay', element)
    }
  }
}
</script>

<style scoped>

</style>