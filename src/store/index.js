import Vue from 'vue'
import Vuex from 'vuex'
import { genVuexModels } from 'vuex-models'
import counter from './counter'
import formData from './formData'


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        counter,
        formData
    },
    state: {
        title: 'hello from store'
        
    },
    getters: {
        title(state){
            return state.title
        }
    },
    ...genVuexModels({
      vmodelCompatible: true,
      vmodelCompatible2: false
      // https://ikfi.ru/article/vuex-models-prostoj-sposob-nauchit-vuex-rabotat-s-v-model

    }, 'featureStateVariable')

})