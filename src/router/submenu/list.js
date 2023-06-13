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
			path: '/newproduct',
			component: () => import('@/views/NewProductCalendar.vue'),
		},
	],
};

export default list;
