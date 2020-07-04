import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home
		},
		{
			path: '/user',
			component: User
		}
	]
})

export default router
