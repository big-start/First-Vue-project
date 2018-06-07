<template>
  <div class="film-details__wrapper">
    <div class="film-details">
      <div class="film-details__inner">
        <div class="film-details__img">
          <img :src="filmDetail.backdrop_path | imgTest">
        </div>
        <div class="content-film">
          <span class="film-details__name">{{ filmDetail.original_title }}</span>
          <span class="film-details__vote-average">{{ filmDetail.vote_average }}</span>
          <span class="film-details__genres" v-for="item in filmDetail.genres">{{ item.name }}</span>
          <span class="film-details__release">{{ filmDetail.release_date }}</span>
        </div>
      </div>
      <p class="film-details__overview">{{ filmDetail.overview }}</p>
    </div>
    <div class="recommendations-films">
      <div class="recommendations-films__inner"
           v-for="film in recommendationsFilms"
           :key="film.id"
           @click="getFilmDetails(film.id)">
        <div class="recommendations-film__img">
          <img :src="film.backdrop_path | imgTest"/>
        </div>
        <span class="recommendations-film__title">{{ film.original_title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  computed: {
    filmDetail () {
      return this.$store.state.resultsFilm
    },
    recommendationsFilms () {
      return this.$store.state.recommendations
    }
  },
  beforeMount () {
    this.$store.commit('startWaiter')
    this.$store.dispatch('getRecommendations', this.$route.params.id)
    this.$store.dispatch('getFilmDetails', this.$route.params.id).then(() => {
      this.$store.commit('stopWaiter')
    })
  },
  methods: {
    getFilmDetails (id) {
      this.$router.push({name: 'FilmDetails', params: { id: id }})
      document.location.reload()
    }
  }
})
</script>
<style>
.film-details {
  position: relative;
  padding: 15px;
  margin: 0 auto;
  width: 980px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 5px;
}
.film-details__inner {
  display: flex;
}
.content-film {
  display: flex;
  flex-direction: column;
}
.film-details__img {
  margin-right: 15px;
}
.film-details__name {
  font-size: 25px;
}
.film-details__vote-average {
  color: #f00;
  font-weight: bold;
}
.film-details__genres {
  padding: 2px 3px;
  margin-bottom: 2px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,58,60,1) 41%, rgba(0,212,255,1) 100%);
  border: 1px solid #2f3746;
}
.film-details__release {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 15px;
  color: #0f0;
}
.recommendations-films {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1200px;
  margin: 0 auto;
  padding-top: 45px;
}
.recommendations-films__inner {
  position: relative;
  margin-bottom: 5px;
}
.recommendations-film__img img {
  width: 380px;
}
.recommendations-film__title {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  color: #fff;
  text-align: center;
  background: #000;
}
</style>
