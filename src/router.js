import VueRouter from 'vue-router';

import account from './main/Account.vue'
import goodList from './main/GoodList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

var router=new VueRouter({
	routes:[
		{ 
			path:'/account',
			component:account,
			children:[
				{ path:'login', component:login},
				{ path:'register', component:register}

			]
		},
		{ name:'goodList', path:'/goodList',component:goodList}
	]
})


export default router;