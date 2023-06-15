<template>
	<div id="storeInfo">
		<div class="link">
			<ul>
				<li data-id="wrap1">대구 공평동 피그먼트</li>
				<li data-id="wrap2">LF 스퀘어 광양 피그먼트</li>
				<li data-id="wrap3">수원 애경 피그먼트</li>
				<li data-id="wrap4">안성 스타필드 피그먼트</li>
				<li data-id="wrap5">중동 현대백화점 U-PEX 피그먼트</li>
			</ul>
		</div>
		<br />
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<div class="storeWrap wrap1">
			<div class="info">
				<span>대구 공평동 피그먼트</span>
				<button type="button" class="toggleMap" data-id="wrap1">
					매장지도
				</button>
				<button type="button" class="togglePhoto" data-id="wrap1">
					매장사진
				</button>
			</div>
			<div id="test1" class="map"></div>
			<div class="swiper slide">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="storeWrap wrap2">
			<div class="info">
				<span>LF 스퀘어 광양 피그먼트</span>
				<button type="button" class="toggleMap" data-id="wrap2">
					매장지도
				</button>
				<button type="button" class="togglePhoto" data-id="wrap2">
					매장사진
				</button>
			</div>
			<div id="test2" class="map"></div>
			<div class="swiper slide">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="storeWrap wrap3">
			<div class="info">
				<span>수원 애경 피그먼트</span>
				<button type="button" class="toggleMap" data-id="wrap3">
					매장지도
				</button>
				<button type="button" class="togglePhoto" data-id="wrap3">
					매장사진
				</button>
			</div>
			<div id="test3" class="map"></div>
			<div class="swiper slide">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="storeWrap wrap4">
			<div class="info">
				<span>안성 스타필드 피그먼트</span>
				<button type="button" class="toggleMap" data-id="wrap4">
					매장지도
				</button>
				<button type="button" class="togglePhoto" data-id="wrap4">
					매장사진
				</button>
			</div>
			<div id="test4" class="map"></div>
			<div class="swiper slide">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
				</div>
			</div>
		</div>
		<div class="storeWrap wrap5">
			<div class="info">
				<span>중동 현대백화점 U-PEX 피그먼트</span>
				<button type="button" class="toggleMap" data-id="wrap5">
					매장지도
				</button>
				<button type="button" class="togglePhoto" data-id="wrap5">
					매장사진
				</button>
			</div>
			<div id="test5" class="map"></div>
			<div class="swiper slide">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
					<div class="swiper-slide">
						<img src="@/assets/img/testslide.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.bindEvent();
		this.kakaoMapInit();
		this.slideInit();
		this.hideMap();
	},
	methods: {
		bindEvent() {
			$('.storeWrap .toggleMap').on('click', e => {
				console.log(1111);
				const target = $(e.currentTarget);
				const id = target.attr('data-id');
				this.showMap(id);
			});

			$('.storeWrap .togglePhoto').on('click', e => {
				const target = $(e.currentTarget);
				const id = target.attr('data-id');
				this.showPhoto(id);
			});

			$('.link li').on('click', e => {
				e.preventDefault();
				const target = $(e.currentTarget);
				const id = target.attr('data-id');
				console.log(id);
				this.scrollIntoView(id);
			});
		},
		hideMap() {
			$('.map').hide();
		},
		showMap(target) {
			var isVisible = $(`.${target}`).find('.map').is(':visible');
			if (isVisible) {
				$(`.${target}`).find('.map').hide();
				return;
			} else {
				this.hideAll();
				$(`.${target}`).find('.map').show();
			}
		},
		showPhoto(target) {
			var isVisible = $(`.${target}`).find('.slide').is(':visible');
			if (isVisible) {
				$(`.${target}`).find('.slide').hide();
				return;
			} else {
				this.hideAll();
				$(`.${target}`).find('.slide').show();
			}
		},
		hideAll() {
			$('.map').hide();
			$('.slide').hide();
		},
		slideInit() {
			// eslint-disable-next-line
			new Swiper('.swiper', {
				slidesPerView: 1,
			});
		},
		scrollIntoView(target) {
			document
				.querySelector('.' + target)
				.scrollIntoView({ behavior: 'smooth' });
		},
		kakaoMapInit() {
			$('#storeInfo').hcKakaoMap({
				data: [
					{
						id: 'test1',
						nameMarkup:
							'<span style="font-size:12px">대구 공평동 피그먼트</span>',
						lat: 35.868362,
						lng: 128.59787,
					},
					{
						id: 'test2',
						nameMarkup: '<span>LF 스퀘어 광양 피그먼트</span>',
						lat: 34.962746,
						lng: 127.566861,
					},
					{
						id: 'test3',
						nameMarkup: '<span>수원 애경 피그먼트</span>',
						lat: 37.266373,
						lng: 126.999902,
					},
					{
						id: 'test4',
						nameMarkup: '<span>안성 스타필드 피그먼트</span>',
						lat: 36.994555,
						lng: 127.147547,
					},
					{
						id: 'test5',
						nameMarkup:
							'<span>중동 현대백화점 U-PEX 피그먼트</span>',
						lat: 37.504431,
						lng: 126.762245,
					},
				],
			});
		},
	},
};
</script>
<style>
.map {
	width: 500px;
	height: 400px;
	float: left;
	border: 1px solid green;
	/* display: none; */
}
.slide {
	float: left;
	width: 500px;
	display: none;
	border: 1px solid green;
}
.storeWrap {
	clear: both;
}
.info span {
	margin-right: 30px;
}

button {
	margin-right: 30px;
}
</style>
