import globalComponents from './globalComponents';
import Fragment from 'vue-fragment';

import '@/assets/css/global.css';

export default {
	install(Vue) {
		Vue.use(Fragment.Plugin);
		Vue.use(globalComponents);
	},
};
