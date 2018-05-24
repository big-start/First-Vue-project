<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
  </div> 
</template>

<script>
import	Heder from '@/components/shared_components/Heder'

export default{
  components: {
    appHeader: Heder
  }
}
</script>

<style>
@import './style/index.css'
</style>