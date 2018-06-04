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
    <app-pagination :actionName="'getListUpcoming'"></app-pagination>
  </div>
</template>

<script>
import Genres from '@/components/shared_components/Genres'
import Pagination from '@/components/shared_components/Pagination'
import Film from '@/components/shared_components/Film-component'

export default ({
  computed: {
    upcomings () {
      if (this.$store.state.FilmByGenres.length) {
        return this.$store.state.FilmByGenres
      }
      return this.$store.state.resultsUpcoming
    }
  },
  components: {
    appGenres: Genres,
    appPagination: Pagination,
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
.upcoming__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.post__upcoming {
  width: 550px;
  margin: 0 15px 10px;
  padding: 15px 10px;
  background: #fff;
  border: 2px solid #222;
  border-radius: 10px;
}
</style>
