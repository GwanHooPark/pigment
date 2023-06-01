import Navigation from '@/components/Header';
import Side from '@/components/Side';

export default {
	install(Vue) {
		Vue.component(Navigation.name, Navigation);
		Vue.component(Side.name, Side);
	},
};