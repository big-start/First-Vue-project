import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resultsGenres: [],
    resultsPopular: [],
    resultsUpcoming: []
  },
  mutations: {
    setMoviesGenres( state, data ) {
      state.resultsGenres = data;
    },
    setMoviesPopular( state, data ) {
      state.resultsPopular = data;
    },
    setMoviesUpcoming( state, data ) {
      state.results = data;
    }
  },
  actions: {
    getListGenres({ commit }, data) {
      Vue.http.get('genre/movie/list?api_key=4e4be382df786f26de9d8aa30eded5eb', data).then(function(response) {
        commit('setMoviesGenres', response.body.genres);
      });
    },
    getListPopular({ commit }, data) {
      Vue.http.get('movie/popular?api_key=4e4be382df786f26de9d8aa30eded5eb', data).then(function(response) {
        commit('setMoviesPopular', response.body.results);
      });
    },
    getListUpcoming({ commit }, data) {
      Vue.http.get('movie/popular?api_key=4e4be382df786f26de9d8aa30eded5eb', data).then(function(response) {  
        commit('setMoviesUpcoming', response.body.results);
      });
    }
  }
});

