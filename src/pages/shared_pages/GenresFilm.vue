<template>
  <div class="upcoming">
    <app-genres></app-genres>
    <div class="upcoming__wrapper">
      <router-link  class="post__upcoming"
                    v-for="upcoming in upcomings"
                    :to="'/film/' + upcoming.id">
        <film :item="upcoming"></film>
      </router-link>
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
  components: {
    appGenres: Genres,
    film: Film
  },
  beforeMount () {
    this.$store.commit('startWaiter')
    this.$store.dispatch('getListUpcoming').then(() => {
      this.$store.commit('stopWaiter')
    })
  }
})
</script>
<style>
</style>
