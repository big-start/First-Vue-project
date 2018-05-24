import Vue from 'vue';

var API_KEY = process.env.VUE_APP_API_KEY;

export default {
  getListGenres() {
    return new Promise((resolve, reject) => {
      Vue.http.get('genre/movie/list?' + API_KEY).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getListPopular() {
    return new Promise((resolve, reject) => {
      Vue.http.get('movie/popular?' + API_KEY).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getListUpcoming() {
    return new Promise((resolve, reject) => {
      Vue.http.get('movie/upcoming?' + API_KEY).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};