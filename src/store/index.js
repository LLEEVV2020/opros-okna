import Vue from 'vue'
import Vuex from 'vuex'
import formData from './formData'

import test from './test'
//import test2 from './test2'

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        formData,
        test,
        //test2
    },
    
    
    

})