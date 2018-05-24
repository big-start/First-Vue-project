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
  mutations: {
    setMoviesGenres (state, data) {
      state.resultsGenres = data
    },
    setMoviesPopular (state, data) {
      state.resultsPopular = data
    },
    setMoviesUpcoming (state, data) {
      state.resultsUpcoming = data
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
