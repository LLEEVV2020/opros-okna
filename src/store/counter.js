export default {
    state: {
        counter: 100
    },
    /** get */
    getters: {
        computedCouner (state){
            return state.counter
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