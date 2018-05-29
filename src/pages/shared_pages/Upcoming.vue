<template>
<div class="upcoming">
  <div class="upcoming__wrapper">
    <div class="upcoming_post" v-for="upcoming in upcomings">
      <div class="upcoming_inner">
        <span class="upcoming_name">{{ upcoming.original_title }}</span>
        <div class="upcoming_img">
          <img :src="'https://image.tmdb.org/t/p/w500/' + upcoming.backdrop_path"/>
        </div>
      </div>
      <div class="content-upcoming">
        <p class="overview-post">{{ upcoming.overview }}</p>
      </div>
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
.upcoming__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.upcoming_post {
  position: relative;
}
.upcoming_inner {
  position: relative;
}
.upcoming_name {
  position: absolute;
  bottom: 0;
  display: block;
  padding: 3px 0;
  margin: 0 0 0 8px;
  font-size: 23px;
  background: #00f;
}
.content-upcoming {
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  opacity: 0;
  background: #000;
  color: #FFF;
  transition: all 1s;
}

.upcoming_post:hover .content-upcoming {
  opacity: 1;
}
</style>
