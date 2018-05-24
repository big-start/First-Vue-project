<template>
	<div class="genres">
		<button @click="getList">f</button>
	</div>
</template>

<script>
export default {
  methods: {
    getList() {
      this.$store.dispatch('getListUpcoming');
    }
  }
}
</script>

<style>
.genres {
	display: flex;
	justify-content: space-between;
	padding: 10px 0;        
}
</style>
