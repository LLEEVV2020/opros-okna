<template>
    <div class="container text-center pt-5">
      
                                
<input type="checkbox"  v-model="myVmodel" title="tttttttttit" />
<input type="checkbox"  v-model="myVmodel2"  />

     
      

    </div>
</template>

<script>

//import FormSending from './FormSending'
//import FormModal from './FormModal'

export default {
    
    
computed: {
    myVmodel: {
      get () {
        return this.$store.getters.vmodelCompatible
      },
      set (newValue) {
        this.$store.dispatch('setVmodelCompatible', newValue)
      }
    },
    myVmodel2: {
      get () {
        return this.$store.getters.hghhgghgghhggh
      },
      set (newValue) {
        this.$store.dispatch('sethghhgghgghhggh', newValue)
      }
    }

  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>