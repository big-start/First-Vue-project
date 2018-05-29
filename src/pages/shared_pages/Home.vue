<template>
<div class="home">
  <div class="post" v-for="popular in populars">
    <div class="img-post">
      <img :src="'https://image.tmdb.org/t/p/w500/' + popular.backdrop_path"/>
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
