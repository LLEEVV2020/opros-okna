export default {
    state: {
        counter: 100
    },
    /** get */
    getters: {
        computedCouner (state){
            return state.counter *(5 - 2)
        }
    },
    /** set */
    mutations: {
        changeCounter (state, payload){
            state.counter += payload
        }
    },
    actions: {
        asyncChangeCounter ({commit}, payload){
            setTimeout(() => {
                commit('changeCounter', payload.counterValue)
            }, payload.timeoutDelay)
        }
    }

}