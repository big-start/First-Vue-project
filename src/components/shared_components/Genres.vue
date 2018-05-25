<template>
  <div class="genres__list">
    <div class="genres__item" v-for='genre in genres'>
      <span class="genres__name">{{ genre.name }}</span>
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
  }
})
</script>

<style>
.genres__list {
  display: flex;
  flex-direction: column;
}
.genres__item {
  width: 100%;
  padding: 8px 20px;
  margin-bottom: 3px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,58,60,1) 41%, rgba(0,212,255,1) 100%);
  border: 1px solid #2f3746;
}
</style>
