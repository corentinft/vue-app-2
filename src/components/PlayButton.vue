<template>
  <div>
    <it-button @click="play">Commencer une partie</it-button>
  </div>
</template>

<script>
export default {
  name: "playButton",

  methods: {
    play() {
      this.$emit('play')
    }
  }
}
</script>