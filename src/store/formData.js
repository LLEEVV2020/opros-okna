import axios from 'axios'

export default {
    state: {
        answer: false,
        postBody: null,
        postTitle: null
    },
    getters: {
        answer(state){
            return state.answer
        },
        postBody(state){
            return state.postBody
        },
        postTitle(state){
            return state.postTitle
        }
    },
    mutations: {
        answer (state, payload){
            state.answer = payload           
        },
        changePostBody (state, payload){
            state.postBody = payload           
        },
        
        changePostTitle (state, payload){
            state.postTitle = payload
        }
    },
    actions: {
        
        answer ({commit}, payload){
            
            commit('answer', payload.counterValue)
            
        },
        createPost (val) {
            axios({
              method: 'post',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              url: 'https://copy.css-world.ru/form.php',
              data: {
                  Vse_dannie: val,
                  firstName: val.state.postBody,
                  lastName: val.state.postTitle
              }
            })
            .then(response => {
                /** Открывается модальное окно */
                val.state.answer = true /*response.data*/

                console.log(response)
                console.log("val.state.answer: " + val.state.answer)
                //console.log(val.getters.Vxm_vmodelCompatible)
                //console.log(val.getters.Vxm_vmodelCompatible2)
                val.state.postBody = null
                val.state.postTitle = null
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    

}