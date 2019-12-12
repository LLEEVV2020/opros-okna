import Vue from 'vue'
import Vuex from 'vuex'
import { genVuexModels } from 'vuex-models'
import counter from './counter'
import formData from './formData'
import title from './title'


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        counter,
        formData,
        title
    },
    
    
    ...genVuexModels({
      vmodelCompatible: true,
      vmodelCompatible2: false
      // https://ikfi.ru/article/vuex-models-prostoj-sposob-nauchit-vuex-rabotat-s-v-model

    }, 'featureStateVariable')

})