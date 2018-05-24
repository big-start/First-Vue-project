<template>
  <div class="genres">
    <button @click="getListGenres">G</button>
    <button @click="getListPopular">P</button>
    <button @click="getListUpcoming">U</button>
  </div>
</template>

<script>
export default {
  methods: {
    getListGenres() {
      this.$store.dispatch('getListGenres');
    },
    getListPopular() {
      this.$store.dispatch('getListPopular');
    },
    getListUpcoming() {
      this.$store.dispatch('getListUpcoming');
    }
  }
}
</script>

<style>
.genres {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
</style>
