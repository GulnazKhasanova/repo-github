import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import mainPage from '@/public/pages/main'
import cart from '@/public/pages/cart'
import prodpage from '@/public/pages/prodpage'
import checkout from '@/public/pages/checkout'
//import myform from '@/js/form'



const routes = [

    {
        name: 'main',
        path: "/",
        component: mainPage
    },
    {
        name: 'cart',
        path: "/cart",
        component: cart
    },
    {
        name: 'prodpage',
        path: "/prodpage",
        component: prodpage
    },
    {
        name: 'checkout',
        path: "/checkout",
        component: checkout
    },

]

let router = new VueRouter({

    mode: 'history',
    routes,

})

export default router