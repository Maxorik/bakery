import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Busket from './components/Busket';
import About from './components/About';
import Order from './components/Order';
import Products from './components/Products';
import Not404 from './components/Not404'

const routes = [
    {
        path:'',  //main page
        redirect: {name: 'about'} 
    },
    {
        path:'/busket',  
        component: Busket,
        name: 'busket'
    },
    {
        path:'/about',  
        component: About,
        name: 'about'
    },
    {
        path:'/products', 
        component: Products,
        name: 'products'
    },
     {
        path:'/order',  
        component: Order,
        name: 'order'
    },

    {
        path:'*',  //страница не найдена
        component: Not404
    }
];

export const router = new VueRouter({
    routes,
    //mode:'history'  //doesn't work, error:'Cannot GET /sales'
})