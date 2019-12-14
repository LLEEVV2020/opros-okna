export default {
    state: {
        title: 'hello from store',
        titlMain: 'Главный заголовок'
        
    },
    getters: {
        title(state){
            return state.title
        },
        titlMain(state){
            return state.titlMain
        }
    },
    mutations: {
        titlMain (state, payload){
            state.titlMain = payload           
        }
    },
    actions: {
       
    }
    
}