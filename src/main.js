import Vue from 'vue'
import App from './App.vue'
import router from './router';
import global from '@/plugins/global';

Vue.use(global);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
