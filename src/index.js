import store from './store';
import {router} from './routes.js';

window.Vue = require('vue');
    
    Vue.component('about-component', require('./components/About.vue').default)
    const about_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.about-here'
    })
    
    Vue.component('busket-component', require('./components/Busket.vue').default)
    const busket_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.busket-here'
    })
    
    Vue.component('nav-component', require('./components/Navigation.vue').default)
    const nav_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.nav-here'
    })

    Vue.component('order-component', require('./components/Order.vue').default)
    const order_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.order-here'
    })
    
    Vue.component('products-component', require('./components/Products.vue').default)
    const products_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.products-here'
    })
    
    Vue.component('torouter-component', require('./components/Torouter.vue').default)
    const router_c = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.router-part'
    })

    