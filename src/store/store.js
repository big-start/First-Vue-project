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
    curentPage: 1,
    totalPages: 0,
    waiterActive: false,
    search: [],
    FilmByGenres: [],
    activeGenreId: '',
    recommendationById: '',
    recommendations: []
  },
  mutations: {
    setMoviesGenres (state, data) {
      state.resultsGenres = data.genres
    },
    setMoviesPopular (state, data) {
      state.resultsPopular = data.results
    },
    setMoviesUpcoming (state, data) {
      state.resultsUpcoming = data.results
    },
    setFilmDetails (state, data) {
      state.resultsFilm = data
    },
    startWaiter (state) {
      state.waiterActive = true
    },
    stopWaiter (state) {
      setTimeout(() => {
        state.waiterActive = false
      }, 1000)
    },
    setCurent (state, page) {
      state.curentPage = page
    },
    setTotalPages (state, page) {
      state.totalPages = page
    },
    setSearchFilm (state, data) {
      state.search = data.results
    },
    setFilmsByGenre (state, data) {
      state.FilmByGenres = data.results
    },
    setActiveGenre (state, id) {
      state.activeGenreId = id
    },
    setPage (state) {
      state.curentPage = 1
    },
    setRecommendations (state, data) {
      state.recommendations = data.results
    }
  },
  actions: {
    getListGenres ({ commit }) {
      $ajax.getListGenres().then((data) => {
        commit('setMoviesGenres', data)
      })
    },
    getListPopular ({ commit }, page) {
      $ajax.getListPopular(page).then((data) => {
        if (!page) page = 1
        commit('setMoviesPopular', data)
        commit('setTotalPages', data.total_pages)
      })
    },
    getListUpcoming ({ commit }, page) {
      $ajax.getListUpcoming(page).then((data) => {
        if (!page) page = 1
        commit('setMoviesUpcoming', data)
        commit('setTotalPages', data.total_pages)
      })
    },
    getFilmDetails ({ commit }, id) {
      $ajax.getFilm(id).then((data) => {
        commit('setFilmDetails', data)
      })
    },
    getSearchFilm ({ commit }, inputText) {
      $ajax.getSearchFilm(inputText).then((data) => {
        commit('setSearchFilm', data)
      })
    },
    getFilmsByGenre ({ state, commit }, page) {
      if (!page) page = 1
      $ajax.getFilmsByGenre(state.activeGenreId, page).then((data) => {
        commit('setFilmsByGenre', data)
        commit('setTotalPages', data.total_pages)
      })
    },
    getRecommendations ({commit}, id) {
      $ajax.getRecommendations(id).then((data) => {
        commit('setRecommendations', data)
      })
    }
  }
})
