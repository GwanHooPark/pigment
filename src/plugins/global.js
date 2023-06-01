import globalComponents from './globalComponents';
import Fragment from 'vue-fragment';

import '@/assets/css/common.css';

export default {
	install(Vue) {
		Vue.use(Fragment.Plugin);
		Vue.use(globalComponents);
	},
};