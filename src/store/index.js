import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import about from './about'
import busket from './busket'
import order from './order'
import products from './products'

export default new Vuex.Store({
    modules: {
        about,
        busket,
        order,
        products
    },
    namespaced: true
})
