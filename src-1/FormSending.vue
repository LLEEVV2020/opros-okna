<template>
    <div>
        
        <app-form-modal-wrapper></app-form-modal-wrapper>
        <h1>Отправить почту {{title}} </h1>

        <!--<input type="text" v-model="updatePostBody" placeholder="имя" class="fffffffffddd"/>-->
        <input type="text" v-model="updatePhone" placeholder="Телефон" />
        <input type="button" @click="enterMailing()" value="submit">

        <!--резерв-->
        <input type="checkbox" value="huyhhhg" v-model="vmodelCompatible" />
        <input type="checkbox" value="rttttrr" v-model="vmodelCompatible2" />

        


    </div>
</template>

<script>
import { mapVuexModels } from 'vuex-models'

import FormModalWrapper from './FormModalWrapper'

export default {
    components: {
      appFormModalWrapper: FormModalWrapper

    },
    computed: {
        title(){
            return this.$store.getters.title
        },
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
        },
        ...mapVuexModels({
            vmodelCompatible: 'vmodelCompatible',
            vmodelCompatible2: 'vmodelCompatible2'})
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
