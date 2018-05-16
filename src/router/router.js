
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
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/pages/shared_pages/Contacts')
    },
    {
      path: '/movies',
      name: 'Movies',
      component: () => import('@/pages/shared_pages/Movies')
    }
  ]
})