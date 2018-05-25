
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/shared_pages/Home')
    },
    {
      path: '/popular',
      name: 'Popular',
      component: () => import('@/pages/shared_pages/Popular')
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: () => import('@/pages/shared_pages/Upcoming')
    },
    {
      path: '/genres',
      name: 'Genres',
      component: () => import('@/pages/shared_pages/Genres')
    }
  ]
})
