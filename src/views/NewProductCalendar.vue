<template>
    <div>
        <div>6/5 , 6/7 일에 데이터 있습니다.</div>
        <br><br>
        <div id="pigmentCalendar"></div>
        <br>
        <div id="selectItem"></div>
    </div>
    <!--
        실재로 아래 url을 사용해야한다.
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.7/dayjs.min.js"></script>
    -->

</template>

<script>
import $ from 'jquery';
import Litepicker from 'litepicker';
import dayjs from "dayjs";
export default {
    data() {
        return {
            newList : {
				'2023-06-05':[
                    {
                        'image':'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1ad083b.jpeg',
                        'name':'[RR]\ubca0\ub9ac \uc2a4\uce74\uc2dc \ub9b0\ub128\uac00\ub514\uac74(\ubc18\ud314)',
                        'link':'',
                        'price':'48,500'
                    },
                    {
                        'image':'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440bc1b68964.jpeg',
                        'name':'[RR]\ubca0\ub9ac \uc2a4\uce74\uc2dc \ub9b0\ub128\uac00\ub514\uac74(\uae34\ud314)',
                        'link':'',
                        'price':"48,500"
                    },
                    {
                        'image':'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440be03a3db6.jpeg',
                        'name':'[RR]\ucef7\ud305 \ub77c\uc6b4\ub4dc \uc6cc\uc2f1 \ub098\uc2dc \ud0d1',
                        'link':'',
                        'price':'15,800'
                    }
                ],
                '2023-06-07':[
                    {
                    'image':'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440c3f5e355c.jpeg',
                    'name':'[RR]\ud30c\uba38 \ud53c\uadf8\uba3c\ud2b8 \ubc18\ud314\ud0d1',
                    'link':'',
                    'price':'28,500'
                    },
                    {
                    'image':'https://roompacker.cdn.smart-img.com/newRoompacker/calendar/6440c3c737a63.jpeg',
                    'name':'[RR]\ubaa8\ucf54 \uc6cc\uc2f1 \ubbf8\ub2c8\ucb48\ub9ac \uce74\ub77c \ud0d1',
                    'link':'',
                    'price':'19,800'
                    }
                ],
            },
        }
    },
    mounted() {
        var pigmentCalendar = new Litepicker({
			element: document.getElementById('pigmentCalendar'),
			firstDay : 0,
			inlineMode : true,
			startDate: new Date(),
			buttonText: {
				previousMonth: '<span> < </span>',
				nextMonth: '<span> > </span>',
			},
			lockDays : [['2022-09-09', '2022-09-12'],'2022-10-03','2022-10-10'],
			onInit: function() {
				console.log('init')
			}

		});
        pigmentCalendar.on('preselect', (target) => {
			this.gridItem(this.getDate(target));
		});

		pigmentCalendar.on('change:month', (date) => {
			var selectDate = this.getDate(date)
			pigmentCalendar.setDate(selectDate)
			this.gridItem(selectDate);
		});
        this.gridItem(this.getDate(new Date()));
    },
    methods: {
       makeItem(data){
			return `
				<div style="float:left">
					<div><img style="width:200px" src="${data.image}"/></div>
					<div>${data.name}</div>
					<div>${data.price}</div>
				</div> &nbsp;
			`;

		},
        makeItemList(list) {
			if(list.length < 1) {
				return '상품이 없습니다.';
			}else{
				var listArray = [];
                var _this = this;
				$.each(list,function(index,item) {
					listArray.push(_this.makeItem(item))
				});
				return listArray.join('');
			}
		},
        getDate(date) {
			return dayjs(date.dateInstance).format('YYYY-MM-DD');
		},
        gridItem(date){
			var selectDateItems = this.newList[date] ? this.newList[date] : [];
			var html = this.makeItemList(selectDateItems)
			$('#selectItem').html(html);
		}
    }
}
</script>
<style>
</style>
