import Vue from 'vue'
import Vuex from 'vuex'
import { genVuexModels } from 'vuex-models'
import formData from './formData'

import test from './test'

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        formData,
        test
    },
    
    
    ...genVuexModels({
      vmodelCompatible: true,
      vmodelCompatible2: false

    }, 'featureStateVariable')

})