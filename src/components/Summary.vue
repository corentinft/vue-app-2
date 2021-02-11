<template>
  <div>
    Manche {{ $store.state.round }}/5 <br>
    Manche Gagnée {{ $store.state.win }}
  </div>
</template>

<script>
export default {
  name: "summary"
}
</script>

<style scoped>

</style>