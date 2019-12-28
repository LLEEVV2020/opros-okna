<template>
    <div class="container text-center pt-5">
      
      <h1>c нуля</h1>

      <div>

        <p>Название отсека -  {{ poll[perelitiv].name }}</p>
        <ul>
          <li
            v-for="(item, index) in poll[perelitiv].list" 
            :key="item.id"
          >
          <div v-if="item.text">
            {{ index + 1 }}. {{ item.img }} <br>
            {{ item.text }}
            <p><input type="checkbox"  v-model="item.checkbox"  /></p>
          </div>
           
          <div v-else>
            <input type="text"  placeholder="Телефон" />
            <input type="button"  value="submit">

          </div>
          </li>
          
        </ul>

        <div >
          <button class="btn btn-success" v-if="tableVisibilitylength !== perelitiv"  @click="counterPlus(tableVisibilitylength)" >Add</button>
          <button class="btn btn-danger" v-if="perelitiv && tableVisibilitylength !== perelitiv" @click="counterMinus()" >Minus</button>
        </div>

        <p>Левая картинка - {{ poll[perelitiv].leftimg }}</p>
        <p>{{perelitiv}}</p>
        

      </div>

      
     
    </div>
</template>

<script>
import { mapVuexModels } from 'vuex-models'

export default {
    
  data: function() {
    return  {
      perelitiv: 0
    }
  },  
  computed: {
    ...mapVuexModels([      
      'tableVisibilitylength',
      'poll'
    ])
    
  },
   methods: {
    
    counterPlus(val){

      if(this.perelitiv >= val){
        return this.perelitiv
      }
      this.perelitiv++;

    },
    counterMinus(){
      if(this.perelitiv <= 0){
        return 0
      }
      this.perelitiv--;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/css/style";
  pre{
        text-align: left;
  }
</style>