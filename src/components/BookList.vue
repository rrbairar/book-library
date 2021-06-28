<template>
	<div class="book_card">
		<div class="book_item">
			<img :src="require(`@/assets/images/${title}.svg`)" alt={{title}} class="logo_genre">
			<p>{{title}}</p>
		</div>
		<img src="../assets/images/Next.svg" class="" alt="next" />
	</div>
</template>
<script>
	export default{
		name: 'BookList',
		props:{
      title: String,
      logo: String
    }
	}
</script>
<style>
.book_card{
	border-radius: 4px;
	padding-inline: 10px;
	height: 50px;
	box-shadow: 0 2px 5px 0 rgba(211, 209, 238, 0.5);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	text-transform: uppercase;
	background: #fff;
	margin-bottom: 20px;
	font-weight: 500;
}
.book_item{
	display: flex;
	align-items: center;
	height: 100%;
}
.logo_genre{
	width: 26px;
	margin-right: 10px;
}
</style>