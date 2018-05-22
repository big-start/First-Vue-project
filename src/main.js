import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.use(VueResource)

Vue.http.options.root = 'https://api.themoviedb.org/3/';

Vue.config.productionTip = false


new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})





