<template>
<div class="upcoming">
  <app-genres></app-genres>
  <div class="upcoming__wrapper">
    <router-link  class="upcoming__post"
                  v-for="upcoming in upcomings"
                  :to="'/film/' + upcoming.id">
      <div class="upcoming__post">
        <span class="upcoming__post-name">{{ upcoming.original_title }}</span>
        <div class="upcoming__post-img">
          <img :src="imgUrl(upcoming.backdrop_path)"/>
        </div>
      </div>
      <div class="upcoming__post-content">
        <p class="upcoming__post-overview">{{ upcoming.overview }}</p>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
import Genres from '@/components/shared_components/Genres'

export default ({
  computed: {
    upcomings () {
      return this.$store.state.resultsUpcoming
    }
  },
  methods: {
    imgUrl (path) {
      return 'https://image.tmdb.org/t/p/w500/' + path
    }
  },
  components: {
    appGenres: Genres
  },
  beforeMount () {
    this.$store.dispatch('getListUpcoming')
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
.upcoming__post {
  position: relative;
}
/*.upcoming_inner {
  position: relative;
}*/
.upcoming__post-name {
  position: absolute;
  bottom: 0;
  display: block;
  padding: 3px 0;
  margin: 0 0 0 8px;
  font-size: 23px;
  background: #00f;
}
.upcoming__post-content {
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  opacity: 0;
  background: #000;
  color: #FFF;
  transition: all 1s;
}

.upcoming__post:hover .upcoming__post-content {
  opacity: 1;
}
</style>
