import Vue from 'vue';

import './lib/mui/css/mui.min.css'


import { Header } from 'mint-ui'

Vue.component(Header.name,Header)


import app from './App.vue'


var vm = new Vue({
	el:'#app',
	render:c => c(app),//render 会把指定容器中的所有标签清空所以不要把router-view 和router-link 写到el 控制的元素中
	// router
})