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
			path: '/',
			component: () => import('@/views/MainSlide.vue'),
		},
	],
};

export default list;