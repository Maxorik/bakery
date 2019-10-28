import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import sales from './sales'

export default new Vuex.Store({
    modules: {
        sales
    }
})