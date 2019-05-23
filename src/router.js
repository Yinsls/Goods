import Vue from 'vue'
import Router from 'vue-router'
import Home1 from './views/Home.vue'
import Home2 from './views/About.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home1',
      component: Home1
    },	
		// {		//静态加载组价
		//   path: '/sign_in',
		//   name: 'home2',
		//   component: Home2
		// },
    {			//动态导入组件
      path: '/sign_in',
      name: 'home2',
      component: () => import('./views/About.vue')
    },
    {
      path: '/Index',
      name: 'index',
      component: Index
    }
  ]
})
