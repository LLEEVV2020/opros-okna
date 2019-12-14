<template>
    <div class="container text-center pt-5">
      
                                
<input type="checkbox"  v-model="vmod2Compatible" title="tttttttttit" />
        
      <!--<app-form-sending></app-form-sending>
      <hr>
      <app-Form-Modal v-if="answer"> </app-Form-Modal>-->
      
      

    </div>
</template>

<script>

//import FormSending from './FormSending'
//import FormModal from './FormModal'
import { mapVuexModels } from 'vuex-models'
//import test from './test'
export default {
    
    
  computed: {
    
      ...mapVuexModels(['vmod2Compatible'])
    
    /*answer(){
        return this.$store.getters.answer
    }*/
  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>