<template>
    <div>
        <h1>Отправить почту {{titleTest}} </h1>

        <input type="text" @change="updatePostBody" placeholder="title"/>
        <input type="text" @change="updatePostTitle" placeholder="body"/>
        <input type="button" @click="enterMailing()" value="submit">
    </div>
</template>

<script>

export default {
  // props: ['counter']
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

    },
    methods: {
        updatePostBody(val){
            this.$store.commit('changePostBody', val);
        },
        updatePostTitle(val){
            this.$store.commit('changePostTitle', val);
        },
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