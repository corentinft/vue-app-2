<template>
  <div>
    <it-button @click="resume" :disabled="$store.state.isGame">Continuer une partie</it-button>
  </div>
</template>

<script>
export default {
  name: "resumeButton",

  methods: {
    resume() {
      this.$emit('resume')
    }
  }
}
</script>