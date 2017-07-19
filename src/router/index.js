import Vue from 'vue'
import Router from 'vue-router'
// 一级菜单
const test = resolve => require(['../pages/test/parent.vue'], resolve)
const all = resolve => require(['../pages/test/all.vue'], resolve)
const alltest = resolve => require(['../pages/test/alltest.vue'], resolve)
const swipper = resolve => require(['../pages/test/swipper.vue'], resolve)

// sell relative pages
const sell = resolve => require(['../pages/sell/sell.vue'], resolve)
const food = resolve => require(['../pages/sell/search/food/food.vue'], resolve)
const shop = resolve => require(['../pages/sell/shop/shop.vue'], resolve)
const goods = resolve => require(['../pages/sell/shop/goods.vue'], resolve)
const ratings = resolve => require(['../pages/sell/shop/ratings.vue'], resolve)

// discover relative pages
const discover = resolve => require(['../pages/discover/discover.vue'], resolve)
const order = resolve => require(['../pages/order/order.vue'], resolve)
const profile = resolve => require(['../pages/profile/profile.vue'], resolve)

// login
const login = resolve => require(['../pages/login/login.vue'], resolve)
// test
const msiteFail = resolve => require(['../pages/sell/msiteFail.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/sell' },
    { path: '/test', name: 'test', component: test },
    { path: '/all', name: 'all', component: all },
    { path: '/alltest', name: 'alltest', component: alltest },
    { path: '/swipper', name: 'swipper', component: swipper },
    { path: '/sell', name: 'sell', component: sell },
    { path: '/shop', name: 'shop', component: shop },
    { path: '/goods', name: 'goods', component: goods },
    { path: '/ratings', name: 'ratings', component: ratings },
    { path: '/food', name: 'food', component: food },
    { path: '/discover', name: 'discover', component: discover },
    { path: '/order', name: 'order', component: order },
    { path: '/profile', name: 'profile', component: profile },
    { path: '/msiteFail', name: 'msiteFail', component: msiteFail },
    { path: '/login', name: 'login', component: login }
  ]
})
