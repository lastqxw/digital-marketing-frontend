import Main from '@/view/Main.vue';
export const appRouter = {
	path: '/',
	name: 'main',
	redirect: '/index',
	component: Main,
	children: [{
		path: 'index',
		title: '首页',
		name: 'index',
		component: resolve => {
		  require(['@/view/index/index.vue'], resolve);
		}
	  },
	  {
		path: 'buy',
		title: '购买数据',
		name: 'buy',
		component: resolve => {
		  require(['@/view/buy/buy.vue'], resolve);
		}
	  }
	]
  }
  
export const routers = [
  appRouter
]
