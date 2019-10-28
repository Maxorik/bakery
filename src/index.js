import store from './store';
import {router} from './routes.js';

window.Vue = require('vue');

    Vue.component('sales-component', require('./components/Sales.vue').default)
    const app = new Vue({
    data () {
        return {
        component: false,
        }
    },
    store,
    router,
    el: '.sales-here'
    })


    