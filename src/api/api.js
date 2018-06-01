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
  }
}
