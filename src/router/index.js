import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')//定义路由路径,目的为了webpack打包的时候按需打包，
//语法require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //登录页面
        {
            path: '/login',
            component: login
        },
        //注册页面
        {
            path: '/register',
            component: register
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        }
       ]
    }
  ]
})
