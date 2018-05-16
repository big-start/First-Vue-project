<template>
<div class="menu">
<router-link tag="a" to="/">Home</router-link>
<router-link tag="a" to="/Movies">Movies</router-link>
<router-link tag="a" to="/Contacts">Contacts</router-link>
</div>
</template>

<script>
</script>

<style scoped>
.menu {
	background: #0056ff;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	border: 1px solid #000;
	width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	-webkit-justify-content: space-around;
}
.menu_list {
		
}
a {
	text-decoration: none;
	color: #000;
	-webkit-transition: 1s;
	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	transition: 1s;
	margin: 10px 0;
}
a:hover {
	color: #fff;
}
</style>