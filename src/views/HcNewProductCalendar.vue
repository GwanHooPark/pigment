<template>
	<div>
		<div>6/5 , 6/7 일에 데이터 있습니다.</div>
		<br /><br />
		<div id="pigmentCalendar"></div>
		<br />
		<div id="selectItem"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newList: {
				'2023-06-05': [
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
				'2023-06-07': [
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
				noItemText: '상품이 없습니당.',
				itemMarkup: function (data) {
					if (!data.link) data.link = '#';
					return `
                    <div style="float:left">
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
<style></style>
