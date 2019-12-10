import axios from 'axios'

export default {
    state: {
        postBody: null,
        postTitle: null
    },
    getters: {
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
                this.otvet = response.data
                console.log(this.otvet)
                console.log(response)
                val.state.postBody = null
                val.state.postTitle = null
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },
    

}