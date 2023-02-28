import Vue from 'vue'
// import VueRouter from 'vue-router'
import XVueRouter from '../../plugins/xvue-router'
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'

Vue.use(XVueRouter)

const router = new XVueRouter({
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			name: "Home",
			component: Home,
		}, {
			path: "/detail",
			name: "Detail",
			component: Detail,
		}
	]
})

export default router;