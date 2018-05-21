<template>
	<div class="menu_logo">
		<div class="logo">
			<router-link class="logo__item" tag="a" to="/">Logo</router-link>
		</div>
		<div class="menu">
			<router-link class="menu__item" tag="a" to="/">Home</router-link>
			<router-link class="menu__item" tag="a" to="/Movies">Movies</router-link>
			<router-link class="menu__item" tag="a" to="/Contacts">Contacts</router-link>
		</div>
		<div class="search-block">
			<form action="">
				<input type="text">
			</form>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.menu_logo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 960px;
	margin: 0 auto;	
	padding: 15px 10px;
	background: #1451ba;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}
.logo {
	width: 62px;
	text-align: center;
	background: #fff;
	border-radius: 4px;
}
.logo__item {
	display: block;
	padding: 6px 0;
	text-decoration: none;
	color: #000;
	font-weight: bold;
	text-transform: uppercase;
}
.menu__item {
	display: inline-block;
	margin: 0 25px 0 0;
	text-transform: uppercase;
	text-decoration: none;
	color: #fff;
}
.menu_item:last-child {
	margin: 0;
}
.search-block input {
	height: 25px;
	color: #fff;
	background: #8b929e;
	border: 1px solid #506fa0;
	border-radius: 4px;
}
</style>