<template>
  <div class="">

    <app-Form-Opros></app-Form-Opros>


    <div  class="smartquiz" style="display: none;">      
      <app-form-sending ></app-form-sending>
      <hr>
      <app-Form-Modal v-if="answer"> </app-Form-Modal>
      <app-Test></app-Test>
      
      <b-form-group
          id="fieldset-1"
          description="Let us know your name."
          label="Enter your name"
          label-for="input-1"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>
            
      <!--<popper
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
        </popper>     -->

    </div>
  </div>
</template>

<script>
// https://lk.conversus.pro/api/v1.0/user-quiz/widget/329/show?target_src=gostokno174.ru
import FormSending from './FormSending'
import FormModal from './FormModal'
import Test from './test'
import FormOpros from './FormOpros'

//import Popper from 'vue-popperjs';
//import 'vue-popperjs/dist/vue-popper.css';

export default {
    
 
  components: {
    appFormSending: FormSending,
    appFormModal: FormModal,
    appTest: Test,
    appFormOpros: FormOpros,
    //popper: Popper

  },
  computed: {
    
    answer(){
        return this.$store.getters.answer
    },
    state() {
      return this.name.length >= 4 ? true : false
    },
    invalidFeedback() {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback() {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data() {
    return {
      name: ''
    }
  }

}
</script>

<style lang="scss" >
  @import "./assets/css/style";

</style>