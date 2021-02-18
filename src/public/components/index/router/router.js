import Vue from 'vue'
import Router from 'vue-router'
import products from "comp/products";
import cartItem from "comp/cartItem";


Vue.use(Router);


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: products

        },
        {
            path: '/cart',
            name: 'cart',
            component: cartItem

        }
    ]
    }

)