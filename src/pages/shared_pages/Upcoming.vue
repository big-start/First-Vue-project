<template>
<div class="app">
  <div class="post" v-for='upcoming in upcomings'>
    <div class="">
      <img :src="'https://image.tmdb.org/t/p/w500/' + upcoming.backdrop_path" />
    </div>
    <div class="content-post">
      <span class="name-post">{{ upcoming.original_title }}</span>
      <span class="vote_average-post">{{ upcoming.vote_average }}</span>
      <p class="overview-post">{{ upcoming.overview }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default ({
  computed: {
    upcomings () {
      return this.$store.state.resultsUpcoming
    }
  },
  beforeMount () {
    this.$store.dispatch('getListUpcoming')
  }
})
</script>
<style>
</style>
