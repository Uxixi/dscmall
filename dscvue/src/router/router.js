import Vue from "vue"
import VueRouter from "vue-router"  //需要下载cnpm install vue-router --save

// 使用
Vue.use(VueRouter)

//解决刷新报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 创建组件

import Home from "../views/Home/Home.vue"

import Category from "../views/Category/Category.vue"
import Cart from "../views/Cart/Cart.vue"
import Find from "../views/Find/Find"  //可以省掉后缀名
import Mine from "../views/Mine/Mine"


// 配置路由

let routes = [{
    path: "/home",
    component: Home,
    children: [{
        path: "index", //首页
        component: () => import('../views/Home/children/Index')//按需引入，路由的懒加载
    }, {
        path: "household", //家用电器 
        component: () => import('../views/Home/children/Household')//按需引入，路由的懒加载
    }, {
        path: "clothing",//男装女装	
        component: () => import('../views/Home/children/Clothing')//按需引入，路由的懒加载
    }, {
        path: "shoebag",//鞋靴箱包
        component: () => import('../views/Home/children/ShoeBag')//按需引入，路由的懒加载
    }, {
        path: "mobilephones",//手机数码
        component: () => import('../views/Home/children/MobilePhones')//按需引入，路由的懒加载
    }, {
        path: "computer",//电脑办公
        component: () => import('../views/Home/children/Computer')//按需引入，路由的懒加载
    }, {
        path: "hometextiles",//家居家纺
        component: () => import('../views/Home/children/HomeTextiles')//按需引入，路由的懒加载
    }, {
        path: "personalmakeup",//个人化妆	
        component: () => import('../views/Home/children/PersonalMakeup')//按需引入，路由的懒加载
    }, {
        path: "/home",
        redirect: "/home/index"
    }]
}, {
    path: "/category",
    component: Category
}, {
    path: "/cart",
    component: Cart
}, {
    path: "/find",
    component: Find
}, {
    path: "/mine",
    component: Mine
}, {
    path: "/vuexdemo",
    component: () => import('../views/VuexDemo/VueDemo.vue')//按需引入，路由的懒加载
}, {
    path: "/categroplist/:id",
    component: () => import('../views/Category/CategoryList')//按需引入，路由的懒加载
}, {
    path: "/detail/:id",
    component: () => import('../views/Detail/Detail')//按需引入，路由的懒加载
}, {
    path: "/search",
    component: () => import('../views/Search/Search')//按需引入，路由的懒加载
}, {
    path: "/searchlist",
    component: () => import('../views/Search/SearchList')//按需引入，路由的懒加载
}, {
    path: "/login",
    component: () => import('../views/Login/Login')//按需引入，路由的懒加载
}, {
    path: "/register",
    component: () => import('../views/Login/Register')//按需引入，路由的懒加载
}, {
    path: "/articleDetail",
    component: () => import('../views/Login/ArticleDetail')//按需引入，路由的懒加载
}, {
    path: "/",
    redirect: "/mine"
}]


// 创建一个路由对象

let router = new VueRouter({
    routes
})

// 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。
    if (to.path == "/mine" || to.path == "/login") {
        next();
        return
    }
    const token = JSON.parse(window.localStorage.getItem('userInfo')).token;
    if (!token) return next("/login")
    next()
})


export default router;