import Vue from 'vue'
import Vuex from 'vuex'
import $ajax from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultsGenres: [],
    resultsPopular: [],
    resultsUpcoming: []
  },
  getters: {
    getUpcoming (state) {
      return state.resultsPopular
    }
  },
  mutations: {
    setMoviesGenres (state, data) {
      state.resultsGenres = data.body.genres
    },
    setMoviesPopular (state, data) {
      state.resultsPopular = data.body.results
    },
    setMoviesUpcoming (state, data) {
      state.resultsUpcoming = data.body.results
    }
  },
  actions: {
    getListGenres ({ commit }) {
      $ajax.getListGenres().then((data) => {
        commit('setMoviesGenres', data)
      })
    },
    getListPopular ({ commit }) {
      $ajax.getListPopular().then((data) => {
        commit('setMoviesPopular', data)
      })
    },
    getListUpcoming ({ commit }) {
      $ajax.getListUpcoming().then((data) => {
        commit('setMoviesUpcoming', data)
      })
    }
  }
})
