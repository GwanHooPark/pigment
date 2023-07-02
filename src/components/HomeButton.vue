<template>
	<div class="homeButton" v-on:click="gotoHome">메인으로</div>
</template>

<script>
export default {
	name: 'HomeButtonComponent',
	methods: {
		gotoHome: function () {
			location.href = '/';
		},
	},
};
</script>

<style>
.homeButton {
	width: 200px;
	height: 48px;
	background: #097f12;
	color: #fff;
	text-align: center;
	position: fixed;
	right: 20px;
	bottom: 20px;
	line-height: 48px;
	font-size: 18px;
	border-radius: 25px;
	cursor: pointer;
}
</style>
