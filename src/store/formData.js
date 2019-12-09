import axios from 'axios'

export default {
    state: {
        titleTest: 'Ну должно же сработать',
        postBody: null,
        postTitle: null,
        vocil: ['222222']
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
        },
        
        changePostTitle (state, payload){
            state.postTitle = payload
            console.log(payload)
            console.log('https://jsfiddle.net/posva/oqe9e8pb/')
        }
    },
    actions: {
        createPost () {
            axios({
              method: 'post',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              url: 'https://copy.css-world.ru/form.php',
              data: {
                  firstName: this.postTitle,
                  lastName: this.postBody,
                  ggggggg: "ggggdd",
                  vocil: this.vocil
              }
            })
            .then(response => {
                this.otvet = response.data
                console.log(response)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    }

}