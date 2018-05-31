<template>
  <div class="app">
    <animation></animation>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Heder from '@/components/shared_components/Heder'
import Animation from '@/components/shared_components/Animation'

export default{
  components: {
    appHeader: Heder,
    animation: Animation
  }
}
</script>

<style>
@import './style/index.css'
</style>
