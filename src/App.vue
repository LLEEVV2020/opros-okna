<template>
    <div class="container text-center pt-5">
      <h1>{{title}}</h1>
      <h2>-- {{titlMain}} --</h2>
      <input type="text" v-model="titlMain" placeholder="titlMain" />
      <hr>                            

        

      <app-form-sending></app-form-sending>
      <hr>
      <app-Form-Modal v-if="answer"> </app-Form-Modal>
      <hr>
      <app-counter></app-counter>
      <hr>
      <app-actions ></app-actions>
      

    </div>
</template>

<script>

import Counter from './Counter'
import Actions from './Actions'
import FormSending from './FormSending'
import FormModal from './FormModal'
export default {
    
    components: {
      appCounter: Counter,
      appActions: Actions,
      appFormSending: FormSending,
      appFormModal: FormModal

    },
  computed: {
    title(){
      return this.$store.getters.title
    },
    answer(){
        return this.$store.getters.answer
    },
    titlMain: {
      get: function () {
          return this.$store.getters.titlMain
      },
      set: function (val) {
          this.$store.commit('titlMain', val)
      }
    }
  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>