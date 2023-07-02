<template>
	<aside>
		<h1>PIGMENT</h1>
		<ul>
			<!-- <li>슬라이드</li>
            <li>모달</li>
            <li>타임세일</li>
            <li>풀페이지</li> -->
			<li><router-link to="/newproduct">신상품 캘린더</router-link></li>
			<li><router-link to="/timelimit">타임 세일</router-link></li>
			<li><router-link to="/storeInfo">매장</router-link></li>
			<li><router-link to="/aboutUs">회사소개</router-link></li>
			<!-- <li>레이아웃</li>
            <li>햄버거 메뉴</li>
            <li>아코디언 메뉴</li> -->
		</ul>
	</aside>
</template>
<script>
export default {
	name: 'SideComponent',
};
</script>

<style></style>
