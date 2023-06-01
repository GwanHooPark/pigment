import Vue from 'vue';
import VueRouter from 'vue-router';
import SubMenuList from './submenu/list';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		//redirect: { name: 'Form' },
		component: () => import('@/components/layout/Default'),
		children: [SubMenuList],
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
