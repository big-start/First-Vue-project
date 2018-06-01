<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item-prev"
          @click="prevPage" 
          :class="{'off': page === 1}">Prev</li>

      <li class="pagination__item-curent">{{ page }}&nbsp;/&nbsp;{{ totalPage }}</li>

      <li class="pagination__item-next"
          @click="nextPage" 
          :class="{'off': page === totalPage}">Next</li>
    </ul>
  </div>
</template>

<script>
export default ({
props: ['actionName'],
computed: {
    page () {
      return this.$store.state.curentPage
    },
    totalPage () {
      return this.$store.state.totalPages
    }
},
methods: {
  nextPage (page) {
    if (this.page < this.totalPage){
      this.$store.commit('setCurent', this.page + 1)
      this.$store.dispatch(this.actionName, this.page)
    }
  },
  prevPage(page) {
    if (this.page > 1){
      this.$store.commit('setCurent', this.page - 1)
      this.$store.dispatch(this.actionName, this.page)
    }
  }
}
})
</script>

<style scoped>
.pagination {
  padding: 25px 0 40px;
}
.pagination__list {
  display: flex;
  justify-content: space-between;
  width: 960px;
  padding: 0;
  margin: 0 auto;
}
.pagination__item-curent {
  padding: 5px;
  text-align: center;
  background: #fff;
  list-style: none;
  border-radius: 3px;
}
.pagination__item-next,
.pagination__item-prev {
  padding: 5px 0;
  text-align: center;
  background: #fff;
  list-style: none;
  border-radius: 3px;
  cursor: pointer;
}
.pagination__item-next,
.pagination__item-prev {
  width: 45px;
}
.off {
  cursor: default;
  opacity: 0.5;
}
</style>
