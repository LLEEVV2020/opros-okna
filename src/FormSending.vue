<template>
    <div>
        <h1>Отправить почту {{title}} </h1>

        <input type="text" v-model="updatePostBody" placeholder="title" class="fffffffffddd"/>
        <input type="text" v-model="updatePostTitle" placeholder="body" class="fffffffffddd"/>
        <input type="button" @click="enterMailing()" value="submit">
    </div>
</template>

<script>

export default {
  
    computed: {
        title(){
            return this.$store.getters.title
        },
        
        updatePostTitle: {
            get: function () {
                return this.$store.getters.postTitle
            },
            set: function (val) {
                this.$store.commit('changePostTitle', val)
            }
        },
        updatePostBody: {
            get: function () {
                return this.$store.getters.postBody
            },
            set: function (val) {
                this.$store.commit('changePostBody', val)
            }
        }
    },
    methods: {
        
        enterMailing(val){
            
            this.$store.dispatch('createPost', { 
                val
                //counterValue: val
            })
        }
    }

}
</script>

<style lang="scss" scoped>
  /* https://vuex.vuejs.org/ru/guide/forms.html*/
  i{
      color: #676767; 
  }
</style>