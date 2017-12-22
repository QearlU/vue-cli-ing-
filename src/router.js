/*
* @Author: Celine
* @Date:   2017-12-22 21:34:33
* @Last Modified by:   Celine
* @Last Modified time: 2017-12-22 22:39:38
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import UserList from './components/UserList/UserList'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:'/',
			component:Home,
			children:[
				{
					path:'',
					component:Dashboard
				},
				{
					path:'/users',
					component:UserList
				}
			]
		},
		{
			path:'/login',
			component:Login
		}
	]
})
//导出默认
export default router