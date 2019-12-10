import axios from 'axios'

export default {
    state: {
        titleTest: 'Ну должно же сработать',
        postBody: null,
        postTitle: null
    },
    getters: {
        titleTest(state){
            return state.titleTest
        },
        postBody(state){
            return state.postBody
        },
        postTitle(state){
            return state.postTitle
        }
    },
    mutations: {
        changePostBody (state, payload){
            state.postBody = payload
            console.log(payload)
            console.log(state.postBody)
        },
        
        changePostTitle (state, payload){
            state.postTitle = payload
            console.log(payload)
            console.log(state.postTitle)
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
                  firstName: val.state.postTitle,
                  lastName: val.state.postBody
              }
            })
            .then(response => {
                this.otvet = response.data
                console.log(response)
                console.log(val)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    

}