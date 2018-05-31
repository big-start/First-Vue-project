<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item-prev" @click.prevent="changePage(prevPage)">Prev</li>
      <li class="pagination__item-next" @click.prevent="changePage(nextPage)">Next</li>
    </ul>
  </div>
</template>

<script>
export default ({

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
  margin: 0 auto;
}
.pagination__item-next,
.pagination__item-prev,
.pagination__item {
  width: 25px;
  padding: 5px 0;
  text-align: center;
  background: #fff;
  list-style: none;
  border-radius: 3px;
}
.pagination__item-next,
.pagination__item-prev {
  width: 45px;
}
</style>
