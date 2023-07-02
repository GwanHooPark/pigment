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
			component: () => import('@/views/HcCompany.vue'),
		},
	],
};

export default list;
