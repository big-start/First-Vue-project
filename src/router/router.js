
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
      path: '/upcoming',
      name: 'Upcoming',
      component: () => import('@/pages/shared_pages/Upcoming')
    },
    {
      path: '/film/:id',
      name: 'FilmDetails',
      component: () => import('@/pages/shared_pages/FilmDetails')
    },
    {
      path: '/genres',
      name: 'GenresFilm',
      component: () => import('@/pages/shared_pages/GenresFilm')
    }
  ]
})
