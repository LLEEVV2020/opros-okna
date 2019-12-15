import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initialState() {
  return {
    pageItems: {},
    pageHeaders: {},
    pageName: 'Dog',
    tableTitles: {
      'Dog': [
        'German Shepherd', 
        'Bull Terrier', 
        'Labrador Retriever',
        'jjjjjjjjjjjjjjjj'
      ],
      'Cat': ['Russian Blue', 'British Shorthair', 'Persian'],
      'Bird': ['Cockatiel', 'Parrot', 'Macaw']
    },
    tableVisibility: {
      'Dog': {
        'German Shepherd': false,
        'Bull Terrier': false,
        'Labrador Retriever': false,
        'jjjjjjjjjjjjjjjj': false
      },
      'Cat': {
        'Russian Blue': false,
        'British Shorthair': false,
        'Persian': false
      },
      'Bird': {
        'Cockatiel': false,
        'Parrot': false,
        'Macaw': false
      }
    }
  }
}

const state = {...initialState()}

const mutations = {
  setTableVisibility(state, payload) {
    const page = payload.page;
    const tables = payload.tables;
    // Vue.set(state.tableVisibility, page, tables)
    state.tableVisibility[page] = Object.assign({}, tables);
  },
  setPageName(state, payload) {
    state.pageName = payload;
  }
}

const getters = {
  getTableVisibility: (state) => ( state.tableVisibility[state.pageName] ),
  tableTitles: (state) => ( state.tableTitles[state.pageName] ),
  pageTitles: (state) => ( Object.keys(state.tableTitles) ),
}
export default new Vuex.Store({state, mutations, getters})