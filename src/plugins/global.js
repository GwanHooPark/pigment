import globalComponents from './globalComponents';
import Fragment from 'vue-fragment';

import '@/assets/css/local.css';
import '@/assets/css/pigment_basic.css';
import '@/assets/css/pigment_common.css';

export default {
	install(Vue) {
		Vue.use(Fragment.Plugin);
		Vue.use(globalComponents);
	},
};
