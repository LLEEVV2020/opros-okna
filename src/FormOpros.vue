<template>
    
    <div class="smartquizlayout">

        <div  class="smartquiz">
            <div class="growing-sale-wrapper">
                <div class="growing-sale">
                    <div class="motivator-title">Ваша скидка:</div>
                    <div class="motivator-summ">
                        
                        <i>+ 85.71 руб.</i>
                        <svg class="svg-growing" viewBox="0 0 30.727 30.727">
                            <g>
                                <path d="M2.5,19.393c-0.64,0-1.278-0.244-1.768-0.73c-0.977-0.979-0.977-2.561,0-3.535L15.363,0.498l14.63,14.629   c0.978,0.975,0.978,2.559,0,3.535s-2.56,0.979-3.534,0L15.363,7.568L4.267,18.662C3.781,19.148,3.14,19.393,2.5,19.393z    M29.994,29.496c0.979-0.977,0.979-2.559,0-3.533l-14.63-14.632l-14.63,14.63c-0.978,0.977-0.978,2.561,0,3.535   c0.978,0.977,2.56,0.977,3.535,0L15.363,18.4l11.096,11.096c0.487,0.488,1.129,0.732,1.769,0.732   C28.869,30.229,29.506,29.984,29.994,29.496z" fill="#63d60e"></path>
                            </g>
                        </svg>
                        
                        <span>257 руб.</span>

                    </div>
                </div>

                <div class="steps-paginator">
                    <span>Шаг:</span>
                    <span class="number-left">2</span>
                    <span>/</span>
                    <span>7</span>
                </div>

                <div class="character" >
                    <img :src="'img/quiz/' + poll[perelitiv].leftimg" alt="">
                </div>
            </div>
            
            <!--крстик закрыть--->
            <div class="quiz-close"></div>
            <div class="quiz-right">
                <div class="quiz-title">Пройдите опрос и получите расчет стоимости и скидку 600 руб.</div>
                <div class="quiz-desc">Среднее время прохождения опроса 2 минуты</div>
                <div class="quiz-text"><span v-if="tableVisibilitylength !== perelitiv">{{perelitiv + 1}}.</span> {{ poll[perelitiv].name }}</div>
                <transition-group  class="quiz-panel-images"  
                 name="list" tag="div">>
                    
                    <div class="panel-images-item"
                     v-for="(item) in poll[perelitiv].list" 
                    :key="item"
                    :class="{ display_new: !item.img}"
                    >
                        <div v-if="item.img" class="panel-img" :style="'background-image: url(../img/quiz/' + item.img + ');'">
                            <div class="check-icon"></div>
                        </div>
                        
                        <div class="panel-text" >  
                              <div class="check-icon" v-if="!item.img"></div>
                            <span>{{ item.text }}</span>
                        </div>
                    </div>
                    
                </transition-group>
                
            </div>
            
            <div class="window-bottom">
                <div>Передавая информацию сайту, вы принимаете условия <a target="blank" href="//conversus.pro/agreement.html">Пользовательского соглашения</a></div>

                <button v-if="perelitiv && tableVisibilitylength !== perelitiv" @click="counterMinus()"  class="btn-prev"><i class="arrow-prev"></i><span>Предыдущий шаг</span></button>
                <button v-if="tableVisibilitylength !== perelitiv"  @click="counterPlus(tableVisibilitylength)" class="btn-next">Следующий шаг<i class="arrow-next"></i></button>
            </div>

        </div>
        
        <div class="controls-mobile">
            <button class="btn-prev"><span class="arrow-prev"></span></button>
            <div class="steps-paginator">
                <span>Шаг:</span>
                <span class="number-left" >2</span  >
                <span>/</span>
                <span>7</span>
            </div>
            <button class="btn-next">Следующий шаг<span class="arrow-next"></span></button>

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
.list-enter-active {
  transition: all 1s;
}
.list-leave-to{
  //opacity: 0;
  //transform: translateY(30px);
  display: none;
}


.list-enter  {
  opacity: 0;
  transform: translateY(30px);
}
</style>