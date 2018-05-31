import Vue from 'vue'
import Vuex from 'vuex'
import $ajax from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultsGenres: [],
    resultsPopular: [],
    resultsUpcoming: [],
    resultsFilm: [],
    waiterActive: false
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
    },
    setFilmDetails (state, data) {
      state.resultsFilm = data.body
    },
    startWaiter (state) {
      state.waiterActive = true
    },
    stopWaiter (state) {
      setTimeout(() => {
        state.waiterActive = false
      }, 2000)
    }
  },
  actions: {
    getListGenres ({ commit }) {
      $ajax.getListGenres().then((data) => {
        commit('setMoviesGenres', data)
      })
    },
    getListPopular ({ commit }, page) {
      if (!page) page = 1
      $ajax.getListPopular(page).then((data) => {
        commit('setMoviesPopular', data)
      })
    },
    getListUpcoming ({ commit }) {
      $ajax.getListUpcoming().then((data) => {
        commit('setMoviesUpcoming', data)
      })
    },
    getFilmDetails ({ commit }, id) {
      $ajax.getFilm(id).then((data) => {
        commit('setFilmDetails', data)
      })
    }
  }
})
