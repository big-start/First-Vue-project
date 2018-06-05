<template>
<div>
  <div class="post__img">
    <img :src="item.backdrop_path | imgTest"/>
  </div>
  <div class="post-content">
    <span class="post-content__name upcoming__post-name">{{ item.original_title }}</span>
    <span class="post-content__vote-average">{{ item.vote_average }}</span>
    <p class="post-content__overview upcoming__post-content">{{ item.overview }}</p>
  </div>
</div>
</template>
<script>
export default ({
  props: ['item']
})
</script>

<style>
a {
  text-decoration: none;
}
.post__img {
  margin-right: 20px;
}
.post-content {
  width: 80%;
  color: #000;
}
.post-content__name {
  display: block;
  font-size: 25px;
}
.post-content__vote-average {
  color: #f00;
  font-weight: bold;
}
</style>
