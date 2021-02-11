<template>
  <div>
    <choiceCard></choiceCard>
  </div>
</template>

<script>
import choiceCard from "@/components/ChoiceCard";

export default {
  name: "Game",
  components: {
    choiceCard
  },
  beforeMount() {
    this.$store.dispatch('resumeGame')
  }
}
</script>

<style scoped>

</style>