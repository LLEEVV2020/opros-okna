export default {
    strict: true,
    state: {
      vmodelCompatible: ''
    },
    mutations: {
      SET_VMODEL_COMPATIBLE_VALUE (state, value) {
        state.vmodelCompatible = value
      }
    },
    actions: {
      setVmodelCompatible ({commit}, value) {
        commit('SET_VMODEL_COMPATIBLE_VALUE', value)
      }
    },
    getters: {
      vmodelCompatible (state) {
        return state.vmodelCompatible
      }
    }
  }