<template>
  <div class="genres__list">
    <div class="genres__item"
                 v-for="genre in genres"
                  @click="genreChallenge(genre)">
      <a class="genres__name">{{ genre.name }}</a>
    </div>
  </div>
</template>

<script>
export default ({
  computed: {
    genres () {
      return this.$store.state.resultsGenres
    }
  },
  beforeMount () {
    this.$store.dispatch('getListGenres')
  },
  methods: {
    genreChallenge (genre) {
      this.$store.dispatch('getFilmGenres', genre.id)
    }
  }
})
</script>

<style>
.genres__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
}
.genres__item {
  padding: 8px 10px;
  margin-bottom: 3px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,58,60,1) 41%, rgba(0,212,255,1) 100%);
  border: 1px solid #2f3746;
  cursor: pointer;
}
</style>
