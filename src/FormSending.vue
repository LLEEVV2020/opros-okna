<template>
    <div>
        
        <h1>Отправить почту </h1>

        <input type="text" v-model="updatePostBody" placeholder="имя" class="fffffffffddd"/>
        <input type="text" v-model="updatePhone" placeholder="Телефон" />
        <input type="button" @click="enterMailing()" value="submit">


        


    </div>
</template>

<script>


export default {
    
    computed: {
        
        updatePhone: {
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
  /*https://github.com/vuejs/vue-touch/tree/next
http://hammerjs.github.io/
 https://vuex.vuejs.org/ru/guide/forms.html*/
</style>
