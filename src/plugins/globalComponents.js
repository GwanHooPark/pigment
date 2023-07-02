import Navigation from '@/components/Header';
import Side from '@/components/Side';
import HomeButton from '@/components/HomeButton';

export default {
	install(Vue) {
		Vue.component(Navigation.name, Navigation);
		Vue.component(Side.name, Side);
		Vue.component(HomeButton.name, HomeButton);
	},
};
