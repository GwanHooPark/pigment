import Vue from 'vue';
import VueRouter from 'vue-router';
import SubMenuList from './submenu/list';
import SubMenuList2 from './submenu/list2';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		//redirect: { name: 'Form' },
		component: () => import('@/components/layout/Default'),
		children: [SubMenuList],
	},
	{
		path: '/aboutUs',
		//redirect: { name: 'Form' },
		component: () => import('@/components/layout/NoWrap'),
		children: [SubMenuList2],
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
