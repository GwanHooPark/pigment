const list = {
	path: '/',
	name: '',
	component: {
		render(c) {
			return c('router-view');
		},
	},
	children: [
		{
			path: '/test',
			component: () => import('@/views/MainSlide.vue'),
		},
		{
			path: '/',
			component: () => import('@/views/HcMain.vue'),
		},
		{
			path: '/newproduct',
			component: () => import('@/views/HcNewProductCalendar.vue'),
		},
		{
			path: '/timelimit',
			component: () => import('@/views/HcTimeLimit.vue'),
		},
		{
			path: '/storeInfo',
			component: () => import('@/views/HcStoreInfo.vue'),
		},
	],
};

export default list;
