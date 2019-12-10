import Vue from 'vue'
import Vuex from 'vuex'
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
    }

})