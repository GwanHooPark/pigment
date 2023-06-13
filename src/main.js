import Vue from 'vue';
import App from './App.vue';
import router from './router';
import global from '@/plugins/global';
import $ from 'jquery';
import Litepicker from 'litepicker';
import dayjs from 'dayjs';

Vue.use({
	install(Vue) {
		Vue.prototype.jQuery = $;
		Vue.prototype.Litepicker = Litepicker;
		Vue.prototype.dayjs = dayjs;
	},
});

Vue.use(global);
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
