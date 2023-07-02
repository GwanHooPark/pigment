<template>
	<div>
		<div class="parallax">
			<h1 class="hc_h2">PIGMENT GROUP</h1>

			<ul class="hc_subsidiary_menu">
				<li><a href="#">COMPANY</a></li>
				<li><a href="#">PIGMENT</a></li>
				<li><a href="#">THE COLORWAY</a></li>
				<li><a href="#">TOF</a></li>
			</ul>
			<ul class="hc_subsidiary_menu">
				<li><a href="#">PFS:GALLERY</a></li>
				<li><a href="#">PFS:MOF</a></li>
				<li><a href="#">바른지음</a></li>
			</ul>
		</div>
		<div class="parallax_main">
			<div class="hc_h5 hc_space_heading">CPFLC RETAIL</div>
			<div class="hc_h2 hc_space_headline">PIGMENT</div>
			<div class="hc_h5 hc_space_title">pigment is.</div>
			<div class="hc_tbody_medium hc_space_caption">
				급변하는 패션 트렌드 속에서 기업은 지속적인 성장 및 필수적인
				경쟁력 확보를 위하여 선택과 집중을 통한 핵심 역량 강화가 절실히
				요구되고 있습니다. <br />더욱이 패션기업의 시장 선점과 흐름을
				통찰하는 능력은 매우 중요한 요소입니다. <br />따라서 빠른 생산과
				상품 공급은 기업 성장전략의 선택이 아닌 필수조건이
				되었습니다.<br />
				(주) 케이 컴퍼니는 소비자의 니즈를 빠르게 파악하고 제공하여
				고객감동의 실현과 경영혁신의 추구, 인간존중의 실천을 통해
				성공적인 파트너가 되겠습니다.
			</div>
			<br /><br />
			<div class="hc_tbody_medium">감사합니다.</div>
			<div class="hc_tbody_large hc_space_caption">
				케이컴퍼니 임직원 일동
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		//$('body').addClass('parallax');
		$('div.parallax').parallax({
			imageSrc: require('../assets/img/top_img_company.jpg'),
		});
	},
};
</script>

<style>
div.parallax {
	min-height: 800px;
	background: transparent;
	text-align: center;
	padding-top: 280px;
	color: #000;
}
div.parallax a {
	color: #000;
}
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
/* 타이틀 규칙 */

.hc_h2 {
	font-size: 60px;
	text-transform: uppercase;
	padding-bottom: 100px;
}
.hc_h5 {
	font-size: 36px;
	text-transform: uppercase;
}

/* BODY TEXT 규칙 */
.hc_tbody_medium {
	font-size: 16px;
	line-height: 32px;

	font-weight: 100;
}
.hc_tbody_large {
	font-size: 18px;
	line-height: 36px;
}

/* 여백 규칙 */
.hc_space_heading {
	padding-top: 262px;
}
.hc_space_headline {
	padding-top: 142px;
}
.hc_space_title {
	padding-top: 68px;
}
.hc_space_caption {
	padding-top: 54px;
}

/* 페이지 : 회사소개 */
.hc_subsidiary_menu {
	padding-bottom: 54px;
}
.hc_subsidiary_menu li {
	display: inline-block;
	font-size: 18px;
}
.hc_subsidiary_menu li:first-child::before {
	display: none;
}
.hc_subsidiary_menu li::before {
	content: '';
	display: inline-block;
	width: 1px;
	height: 10px;
	background: #000;
	position: relative;
	top: -3px;
}
.hc_subsidiary_menu a {
	display: inline-block;
	width: 198px;
}
.hc_subsidiary_menu a:hover {
	color: #fff;
	background: #000;
}
</style>
