
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // hide /#/ from URL
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/shared_pages/Home')
    },
    {
      path: '/genres',
      name: 'Genres',
      component: () => import('@/pages/shared_pages/Genres')
    }
  ]
})
