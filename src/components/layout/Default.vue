<template>
	<div class="local_wrap">
		<HeaderComponent></HeaderComponent>
		<div class="local_wrap_main">
			<SideComponent></SideComponent>
			<main class="local_container">
				<router-view></router-view>
				<HomeButtonComponent></HomeButtonComponent>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DefaultLayer',
};
</script>

<style></style>
