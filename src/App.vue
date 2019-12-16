<template>
    <div class="container text-center pt-5">
      <img src="./assets/logo.png">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>               
<popper
    trigger="clickToToggle"
    :options="{
      placement: 'top',
      modifiers: { 
        offset: { offset: '0,10px' } 
      },
      removeOnDestroy: false
    }">
    <div class="popper">
      Popper Content
    </div>

    <button slot="reference">
      Reference Element
    </button>
  </popper>            

        
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

import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
    
    components: {
      appFormSending: FormSending,
      appFormModal: FormModal,
      appTest: Test,
      appTest2: Test2,
      popper: Popper

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