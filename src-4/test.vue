<template>
    <div class="container text-center pt-5">
      

<label v-for="(item, index) in items" :key="item.id">
    {{index}}<input type="checkbox"  v-model="item.value"  />
</label>   
   

    </div>
</template>

<script>

import { mapVuexModels } from 'vuex-models'

export default {
    
  data: function() {
    return  {
      
      items: [
        { message: 'postavitokno' },
        { message: 'osteklitbalkon' },
        { message: 'vkvartiry' },
        { message: 'vchasniidom' },
        { message: 'vpanelniidom' },
        { message: 'vkirpichiidom' },
        { message: 'veka' },
        { message: 'rehau' },
        { message: 'kbe' },
        { message: 'arrec' },
        { message: 'nevazno' },
        { message: 'cvetbelii' },
        { message: 'cvetcvetnoi' },
        { message: 'ystanovkayes' },
        { message: 'ystanovkano' },
        { message: 'cottelkoi' },
        { message: 'bezottdelki' }
      ]
    }
  },  
  computed: {
    
      ...mapVuexModels([
        'postavitokno',
        'osteklitbalkon',
        'vkvartiry',
        'vchasniidom',
        'vpanelniidom',
        'vkirpichiidom',
        'veka',
        'rehau',
        'kbe',
        'arrec',
        'nevazno',
        'cvetbelii',
        'cvetcvetnoi',
        'ystanovkayes',
        'ystanovkano',
        'cottelkoi',
        'bezottdelki'

      ])
    
  }


}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";

</style>