<template>
    <div class="container text-center pt-5">
      
        
        <input type="checkbox"  v-model="postavitokno"  />
        <input type="checkbox"  v-model="osteklitbalkon"  />
        <input type="checkbox"  v-model="vkvartiry"  />
        <input type="checkbox"  v-model="vchasniidom"  />
        <input type="checkbox"  v-model="vpanelniidom"  />
        <input type="checkbox"  v-model="vkirpichiidom"  />
        <input type="checkbox"  v-model="veka"  />
        <input type="checkbox"  v-model="rehau"  />
        <input type="checkbox"  v-model="kbe"  />
        <input type="checkbox"  v-model="arrec"  />
        <input type="checkbox"  v-model="nevazno"  />
        <input type="checkbox"  v-model="cvetbelii"  />
        <input type="checkbox"  v-model="cvetcvetnoi"  />
        <input type="checkbox"  v-model="ystanovkayes"  />
        <input type="checkbox"  v-model="ystanovkano"  />
        <input type="checkbox"  v-model="cottelkoi"  />
        <input type="checkbox"  v-model="bezottdelki"  />

<span v-if="seen">Сейчас меня видно</span>
      

    </div>
</template>

<script>

import { mapVuexModels } from 'vuex-models'

export default {
    
  data: function() {
    return  {
      seen: true
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