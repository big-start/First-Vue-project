<template>
  <div class="app">
    <app-header></app-header>
    <app-genres></app-genres>
    <router-view></router-view>
  </div>
</template>

<script>
import Heder from '@/components/shared_components/Heder'
import Genres from '@/components/shared_components/Genres'

export default{
  components: {
    appHeader: Heder,
    appGenres: Genres
  }
}
</script>

<style>
@import './style/index.css'
</style>
