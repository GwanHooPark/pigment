<template>
	<div>
		<div>7/5 , 7/7 일에 데이터 있습니다.</div>
		<br /><br />
		<div id="pigmentCalendar"></div>
		<br />
		<br />
		<br />
		<br />
		<div id="selectItem"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newList: {
				'2023-07-05': [
					{
						image: 'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1ad083b.jpeg',
						name: '[RR]\ubca0\ub9ac \uc2a4\uce74\uc2dc \ub9b0\ub128\uac00\ub514\uac74(\ubc18\ud314)',
						link: '',
						price: '48,500',
					},
					{
						image: 'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1b68964.jpeg',
						name: '[RR]\ubca0\ub9ac \uc2a4\uce74\uc2dc \ub9b0\ub128\uac00\ub514\uac74(\uae34\ud314)',
						link: '',
						price: '48,500',
					},
					{
						image: 'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440be03a3db6.jpeg',
						name: '[RR]\ucef7\ud305 \ub77c\uc6b4\ub4dc \uc6cc\uc2f1 \ub098\uc2dc \ud0d1',
						link: '',
						price: '15,800',
					},
				],
				'2023-07-07': [
					{
						image: 'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440c3f5e355c.jpeg',
						name: '[RR]\ud30c\uba38 \ud53c\uadf8\uba3c\ud2b8 \ubc18\ud314\ud0d1',
						link: '',
						price: '28,500',
					},
					{
						image: 'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440c3c737a63.jpeg',
						name: '[RR]\ubaa8\ucf54 \uc6cc\uc2f1 \ubbf8\ub2c8\ucb48\ub9ac \uce74\ub77c \ud0d1',
						link: '',
						price: '19,800',
					},
				],
			},
		};
	},
	mounted() {
		this.initNewProductCalendar();
	},
	methods: {
		initNewProductCalendar() {
			$('#pigmentCalendar').newProductCalendar({
				data: this.newList,
				drawWrapId: 'selectItem',
				dateFormat: 'YYYY-MM-DD',
				lockDays: [],
				prevButtonText: '<span> < </span>',
				nextButtonText: '<span> > </span>',
				noItemText: '상품이 없습니다.',
				itemMarkup: function (data) {
					if (!data.link) data.link = '#';
					return `
                    <div>
                        <div>
                            <a href="${data.link}"><img style="width:200px" src="${data.image}"/></a>
                        </div>
                        <div>${data.name}</div>
                        <div>${data.price}</div>
                    </div> &nbsp;
                `;
				},
			});
		},
	},
};
</script>
<style>
#pigmentCalendar {
	width: 938px;
	height: 527px;
	margin: 0 auto;
}
#selectItem {
	display: flex;
	justify-content: center;
}
#selectItem > div {
	flex-direction: column;
	padding-right: 50px;
}
.litepicker .container__months {
	width: 100%;
}
.litepicker .container__months .month-item {
	width: 100%;
}
.litepicker .container__months .month-item-weekdays-row > div {
	width: 134px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	font-size: 18px;
	text-transform: uppercase;
	background: #000;
}
.litepicker .container__days > div,
.litepicker .container__days > a {
	padding: 0;
	width: 134px;
	box-sizing: border-box;
}
.litepicker .container__days .day-item {
	padding: 15px 25px 0 0;
	width: 134px;
	height: 80px;
	color: #000;
	font-size: 28px;
	font-style: italic;
	font-weight: 100;
	text-align: right;
	border-radius: 0;
	box-sizing: border-box;
}
.litepicker .container__days .day-item.is-end-date {
	background-color: #000;
}
.litepicker .container__days .day-item.is-end-date:hover {
	color: #fff;
}
.litepicker .container__days .day-item.is-start-date.is-end-date {
	border-radius: 0;
}
.litepicker .container__days .day-item.is-today {
	position: relative;
	color: #31a364;
	font-weight: 700;
	/* background-color:#fff; */
}
.litepicker .container__days .day-item.is-today:hover {
	color: #31a364;
	border-radius: 0;
}
.litepicker .container__days > .day-item.is-today::after {
	content: '●';
	display: block;
	position: absolute;
	top: 5px;
	right: 5px;
	font-weight: normal;
	font-size: 10px;
}
.litepicker .container__days .day-item:hover {
	color: #000;
	box-shadow: inset 0 0 0 1px #000;
}
.litepicker .container__months .month-item-header {
	color: #000;
	font-size: 38px;
	text-transform: uppercase;
	font-weight: 200;
}
.litepicker .container__months .month-item-header div > .month-item-name {
	font-weight: 200;
}
</style>
