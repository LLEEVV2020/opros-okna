<template>
    <div class="container text-center pt-5">
      
                                

        
      <app-form-sending></app-form-sending>
      <hr>
      <app-Form-Modal v-if="answer"> </app-Form-Modal>
      
      

    </div>
</template>

<script>

import FormSending from './FormSending'
import FormModal from './FormModal'

export default {
    
    components: {
      appFormSending: FormSending,
      appFormModal: FormModal

    },
  computed: {
    
    answer(){
        return this.$store.getters.answer
    }
  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>