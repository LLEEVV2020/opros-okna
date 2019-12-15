<template>
    <div class="container text-center pt-5">
      
                                

        
      <app-form-sending></app-form-sending>
      <hr>
      <app-Form-Modal v-if="answer"> </app-Form-Modal>
      <app-Test></app-Test>
      <app-Test2></app-Test2>

    </div>
</template>

<script>

import FormSending from './FormSending'
import FormModal from './FormModal'
import Test from './test'
import Test2 from './Test2'

export default {
    
    components: {
      appFormSending: FormSending,
      appFormModal: FormModal,
      appTest: Test,
      appTest2: Test2

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