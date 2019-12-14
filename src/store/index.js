import Vue from 'vue'
import Vuex from 'vuex'
import { genVuexModels } from 'vuex-models'
//import formData from './formData'
import store from './store'
import storeLight from './storeLight'


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        //formData,
        store,
        storeLight
    },
    
    
    /*...genVuexModels({
      vmodelCompatible: true,
      vmodelCompatible2: false

    }, 'featureStateVariable')*/

})