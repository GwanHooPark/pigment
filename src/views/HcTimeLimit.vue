<template>
	<div>
		<div id="firstItemTime"></div>
		<div id="timesaleItem">
			<div style="padding-right: 50px" class="firstItem">
				<div>
					<a href="#"
						><img
							style="width: 200px"
							src="https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1ad083b.jpeg"
					/></a>
				</div>
				<div>[RR]베리 스카시 린넨가디건</div>
				<div>48,500</div>
				<div data-remain-sec2="55" class="remainInfo"></div>
			</div>
			&nbsp; &nbsp; &nbsp;

			<div style="padding-right: 50px" class="item">
				<div>
					<a href="#"
						><img
							style="width: 200px"
							src="https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1b68964.jpeg"
					/></a>
				</div>
				<div>[RR]베리 스카시 린넨가디건</div>
				<div>48,500</div>
				<div data-remain-sec="11122334" class="remainInfo"></div>
			</div>
			&nbsp; &nbsp; &nbsp;

			<div style="padding-right: 50px" class="item">
				<div>
					<a href="#"
						><img
							style="width: 200px"
							src="https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440be03a3db6.jpeg"
					/></a>
				</div>
				<div>[RR]컷팅 라운드 워싱 나시 탑</div>
				<div>15,800</div>
				<div data-remain-sec="10" class="remainInfo"></div>
			</div>
			&nbsp; &nbsp; &nbsp;
			<div style="padding-right: 50px" class="item">
				<div>
					<a href="#"
						><img
							style="width: 200px"
							src="https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440be03a3db6.jpeg"
					/></a>
				</div>
				<div>나시 탑</div>
				<div>15,800</div>
				<div data-remain-sec="15" class="remainInfo"></div>
			</div>
			&nbsp; &nbsp; &nbsp;
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.init();
	},
	methods: {
		init() {
			$('div.firstItem').hcTimeLimit({
				remainAttr: 'data-remain-sec2',
				targetClass: 'remainInfo',
				updateTime: function ($wrap, result) {
					$wrap
						.find('.remainInfo')
						.text(
							`${result.days} : ${result.hours} : ${result.minutes} : ${result.seconds}`,
						);
					$('#firstItemTime').text(
						`${result.days} : ${result.hours} : ${result.minutes} : ${result.seconds}`,
					);
				},
				onTimeout: function ($wrap) {
					$wrap.css('opacity', 0.5);
					$wrap.find('.remainInfo').text('이벤트가 종료되었습니다.');
				},
			});
			$('div.item').hcTimeLimit({
				remainAttr: 'data-remain-sec',
				targetClass: 'remainInfo',
				updateTime: function ($wrap, result) {
					$wrap
						.find('.remainInfo')
						.text(
							`${result.days} : ${result.hours} : ${result.minutes} : ${result.seconds}`,
						);
				},
				onTimeout: function ($wrap) {
					$wrap.css('opacity', 0.5);
					$wrap.find('.remainInfo').text('이벤트가 종료되었습니다.');
				},
			});
		},
	},
};
</script>
<style>
#firstItemTime {
	padding: 50px;
	font-size: 45px;
	text-align: center;
}
#timesaleItem {
	margin: 0 auto;
	display: flex;
	justify-content: center;
}
</style>
