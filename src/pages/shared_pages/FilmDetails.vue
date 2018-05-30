<template>
<div class="filmDetails">
  <div class="filmDetails__inner">
    <div class="img_film">
      <img :src="imgUrl(filmDetail.backdrop_path)"/>
    </div>
    <div class="content-film">
      <span class="name-film">{{ filmDetail.original_title }}</span>
      <span class="vote_average-film">{{ filmDetail.vote_average }}</span>
      <span class="genres-film" v-for="item in filmDetail.genres">{{ item.name }}</span>
      <span class="release_date-film">{{ filmDetail.release_date }}</span>
    </div>
  </div>
  <p class="overview-film">{{ filmDetail.overview }}</p>
</div>
</template>

<script>
export default ({
  computed: {
    filmDetail () {
      return this.$store.state.resultsFilm
    }
  },
  methods: {
    imgUrl (path) {
      return 'https://image.tmdb.org/t/p/w500/' + path
    }
  },
  beforeMount () {
    this.$store.dispatch('getFilmDetails', this.$route.params.id)
  }
})
</script>
<style>
.filmDetails {
  position: relative;
  padding: 15px;
  margin: 0 auto;
  width: 980px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 5px;
}
.filmDetails__inner {
  display: flex;
}
.content-film {
  display: flex;
  flex-direction: column;
}
.img_film {
  margin-right: 15px;
}
.name-film {
  font-size: 25px;
}
.vote_average-film {
  color: #f00;
  font-weight: bold;
}
.genres-film {
  padding: 2px 3px;
  margin-bottom: 2px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,58,60,1) 41%, rgba(0,212,255,1) 100%);
  border: 1px solid #2f3746;
}
.release_date-film {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 15px;
  color: #0f0;
}
</style>
