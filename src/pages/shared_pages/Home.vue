<template>
  <div class="home">
    <app-genres></app-genres>
    <router-link v-for="popular in populars"
                 :to="'/film/' + popular.id"
                 class="post">
      <div class="post__img">
        <img :src="imgUrl(popular.backdrop_path)"/>
      </div>
      <div class="post-content">
        <span class="post-content__name">{{ popular.original_title }}</span>
        <span class="post-content__vote-average">{{ popular.vote_average }}</span>
        <p class="post-content__overview">{{ popular.overview }}</p>
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
.post__img {
  margin-right: 20px;
}
.post-content {
  width: 80%;
  color: #000;
}
.post-content__name {
  display: block;
  font-size: 25px;
}
.post-content__vote-average {
  color: #f00;
  font-weight: bold;
}
</style>
