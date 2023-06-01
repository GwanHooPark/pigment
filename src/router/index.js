import Vue from 'vue';
import VueRouter from 'vue-router';
import SubMenuAdmin from './submenu/admin';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		//redirect: { name: 'Form' },
		component: () => import('@/components/layout/DefaultLayout'),
		children: [SubMenuAdmin],
	},
	// {
	// 	path: '*',
	// 	component: () => import('@/views/common/NotFound.vue'),
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;