<template>
  <div class="home">
    <app-genres></app-genres>
    <router-link v-for="popular in populars"
                 :to="'/film/' + popular.id"
                 class="post">
      <div class="img-post">
        <img :src="imgUrl(popular.backdrop_path)"/>
      </div>
      <div class="content-post">
        <span class="name-post">{{ popular.original_title }}</span>
        <span class="vote_average-post">{{ popular.vote_average }}</span>
        <p class="overview-post">{{ popular.overview }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Genres from '@/components/shared_components/Genres'

export default ({
  computed: {
    populars () {
      return this.$store.state.resultsPopular
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
    this.$store.dispatch('getListPopular')
  }
})
</script>
<style>
a {
  text-decoration: none;
}
.post {
  display: flex;
  justify-content: space-between;
  margin: 0 15px 10px;
  padding: 15px 10px;
  background: #fff;
  border: 2px solid #222;
  border-radius: 10px;
}
.img-post {
  margin-right: 20px;
}
.content-post {
  width: 80%;
  color: #000;
}
.name-post {
  display: block;
  font-size: 25px;
}
.vote_average-post {
  color: #f00;
  font-weight: bold;
}
</style>
