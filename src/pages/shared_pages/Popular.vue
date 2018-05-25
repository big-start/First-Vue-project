<template>
  <div class="app">
  <div class="post" v-for='popular in populars'>
    <div class="video-post">
      <img :src="'https://image.tmdb.org/t/p/w500/' + popular.backdrop_path" />
    </div>
    <div class="content-post">
      <span class="name-post">{{ popular.original_title }}</span>
      <span class="vote_average-post">{{ popular.vote_average }}</span>
      <p class="overview-post">{{ popular.overview }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default ({
  computed: {
    populars () {
      return this.$store.state.resultsPopular
    }
  },
  beforeMount () {
    this.$store.dispatch('getListPopular')
  }
})
</script>
<style>
</style>
