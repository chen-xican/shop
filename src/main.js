import Vue from 'vue';


import VueRouter from 'vue-router';

import router from './router';

import VueResource from 'vue-resource';

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import app from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)


var vm = new Vue({
	el:'#app',
	render:c => c(app),//render 会把指定容器中的所有标签清空所以不要把router-view 和router-link 写到el 控制的元素中
	router
})