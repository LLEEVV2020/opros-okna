import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import formData from './formData'

import test from './test'

Vue.use(Vuex)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Vuex.Store({
    modules: {
        formData,
        test,
        //test2
    },
    
    
    

})