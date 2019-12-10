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
        changeAnswer (state, payload){
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
                val.state.answer = response.data
                console.log(response)
                console.log(val.state.answer)
                val.state.postBody = null
                val.state.postTitle = null
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    

}