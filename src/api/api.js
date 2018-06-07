import Vue from 'vue'

var API_KEY = process.env.VUE_APP_API_KEY

export default {
  getListGenres () {
    return new Promise((resolve, reject) => {
      Vue.http.get('genre/movie/list?' + API_KEY).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getListPopular (page) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`movie/popular?${API_KEY}&page=${page}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getListUpcoming (page) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`movie/upcoming?${API_KEY}&page=${page}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getFilm (id) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`movie/${id}?${API_KEY}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getSearchFilm (inputText) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`search/movie?${API_KEY}&query=${inputText}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getFilmsByGenre (genreId, page) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`genre/${genreId}/movies?${API_KEY}&page=${page}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getRecommendations (id) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`movie/${id}/recommendations?${API_KEY}`).then((response) => {
        resolve(response.body)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
