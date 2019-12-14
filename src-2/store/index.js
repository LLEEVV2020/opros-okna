import Vue from 'vue'
import Vuex from 'vuex'
import { genVuexModels } from 'vuex-models'
import formData from './formData'


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        formData
    },
    
    
    ...genVuexModels({
      vmodelCompatible: true,
      vmodelCompatible2: false

    }, 'featureStateVariable')

})