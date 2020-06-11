import { createRouter, createWebHistory } from 'vue-router'
import User from './views/User.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			component: () => import('./views/Home.vue')
		},
		{
			path: '/user',
			component: User
		}
	]
})

export default router
