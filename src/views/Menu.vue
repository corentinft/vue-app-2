<template>
  <div>
    <playButton @play="play"></playButton>
    <resumeButton @resume="resume"></resumeButton>
  </div>
</template>

<script>
import playButton from "@/components/PlayButton";
import resumeButton from "@/components/ResumeButton";

export default {
  name: 'Menu',

  components: {
    playButton,
    resumeButton
  },

  methods: {
    play() {
      this.$store.dispatch('startGame')
    },
    resume() {
      this.$store.dispatch('goRouteGame')
    }
  },

  created() {
    this.$store.dispatch('isGame')
  }
}
</script>
