<template>
    <div class="container text-center pt-5">
      
                                
      <store></store>
      <storeLight></storeLight>
      <span v-if="Seen">Сейчас меня видно</span>

    </div>
</template>

<script>

//import FormSending from './FormSending'
//import FormModal from './FormModal'
//import { mapVuexModels } from 'vuex-models'
import store from './Store'
import storeLight from './StoreLight'
export default {
    
    components: {
      //appFormSending: FormSending,
      //appFormModal: FormModal
      store,
      storeLight

    },
  data: function() {
    return  {
      seen: true
    }
  },
  computed: {
    Seen: {
      get: function () {
        return this.seen
      },
      
      set: function (newValue) {
        this.seen = newValue
      }
    }
  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>