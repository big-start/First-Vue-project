import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router/router'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	render: h => h(App),

	data: {
		endpoint: 'https://api.themoviedb.org/3/movie/550?api_key=4e4be382df786f26de9d8aa30eded5eb'
	},

	methods: {
		post: function () {
			this.$http.get(this.endpoint).then(function(response){
				console.log(response)
			},
			function(error){
				//error
			})
		}
	},
	created: function(){
		this.post()
	}
})

