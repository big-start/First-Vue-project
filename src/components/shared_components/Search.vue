<template>
    <div class="search">
        <div class="search-block">
            <form action="">
                <input v-model="text" type="text" @keyup="search" placeholder="Search">
            </form>
        </div>
        <div class="film-absolute">
            <router-link v-for="film in films"
                         :to="'/film/' + film.id"
                         class="film">
                <div class="film-post">
                    <span class="film-post__name">{{ film.original_title }}</span>
                    <span class="film-post__vote_average">{{ film.vote_average }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Film from '@/components/shared_components/Film-component'

export default ({
  data () {
    return {
      text: ''
    }
  },
  computed: {
    films () {
      return this.$store.state.search
    }
  },
  methods: {
    search () {
      this.$store.dispatch('getSearchFilm', this.text)
    }
  },
  components: {
    film: Film
  }
})
</script>

<style scoped>
    .search {
        width: 960px;
        padding: 15px;
        margin: 0 auto;
    }
    .search-block input {
        height: 25px;
        padding: 0 10px;
        color: #000;
        border: 1px solid #506fa0;
        border-radius: 4px;
    }
    .search-block form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    .search-block form div {
        height: 20px;
        background: #fff;
    }
    .film-post {
        width: 435px;
        padding: 15px 7px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 4px;
    }
    .film-post__name {
        font-size: 25px;
        color: #000;
    }
    .film-post__vote_average {
        margin-left: 8px;
        color: #f00;
        font-size: bold;
    }
    .film-absolute {
        position: absolute;
    }
    .film-post:hover {
        background: #cec4c4;
    }
</style>