import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Sales from './components/Sales';
import Not404 from './components/Not404'

const routes = [
    {
        path:'',  //main page
        redirect: {name: 'sales'} //перенаправление на нужный компонент
    },
    {
        path:'/sales',  //url страницы, где нужен компонент
        component: Sales,
        name: 'sales'
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