<template>
    <div>
        <h1>Отправить почту {{titleTest}} </h1>

        <input type="text" v-model="updatePostBody" placeholder="title" class="fffffffffddd"/>
        <input type="text" v-model="updatePostTitle" placeholder="body" class="fffffffffddd"/>
        <input type="button" @click="enterMailing()" value="submit">
    </div>
</template>

<script>

export default {
  // https://vuex.vuejs.org/ru/guide/forms.html
    computed: {
        titleTest(){
            return this.$store.getters.titleTest
        },
        postBody(){
            return this.$store.getters.postBody
        },
        postTitle(){
            return this.$store.getters.postTitle
        },
        updatePostBody(val){
            this.$store.dispatch('asyncChangePostBody', val);
        },
        updatePostTitle(val){
            this.$store.dispatch('asyncChangePostTitle', val);
        },
    },
    methods: {
        
        enterMailing(val){
            
            this.$store.dispatch('createPost', {
                //counterValue: val,
                //timeoutDelay: 200
            })
        }
    }

}
</script>

<style lang="scss" scoped>
  
  
</style>