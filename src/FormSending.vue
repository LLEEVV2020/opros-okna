<template>
    <div>
        
        <h1>Отправить почту </h1>

        <input type="text" v-model="updatePostBody" placeholder="имя" class="fffffffffddd"/>
        
        <the-mask mask="###(###)###-##" v-model="updatePhone" placeholder="Телефон" />
        <input type="button" class="btn-next" @click="enterMailing()" value="Получить скидку">


        


    </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
    
  components: {TheMask},

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
