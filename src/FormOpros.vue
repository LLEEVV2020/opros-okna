<template>
    
    <div class="smartquizlayout">

        <div  class="smartquiz">
            <div class="growing-sale-wrapper">
                <div class="growing-sale">
                    <div class="motivator-title">Ваша скидка:</div>
                    <div class="motivator-summ">
                        
                        <i :class="{ display_none: tableVisibilitylength === perelitiv}">+ 85.71 руб.</i>
                        <svg :class="{ display_none: tableVisibilitylength === perelitiv}" class="svg-growing" viewBox="0 0 30.727 30.727">
                            <g>
                                <path d="M2.5,19.393c-0.64,0-1.278-0.244-1.768-0.73c-0.977-0.979-0.977-2.561,0-3.535L15.363,0.498l14.63,14.629   c0.978,0.975,0.978,2.559,0,3.535s-2.56,0.979-3.534,0L15.363,7.568L4.267,18.662C3.781,19.148,3.14,19.393,2.5,19.393z    M29.994,29.496c0.979-0.977,0.979-2.559,0-3.533l-14.63-14.632l-14.63,14.63c-0.978,0.977-0.978,2.561,0,3.535   c0.978,0.977,2.56,0.977,3.535,0L15.363,18.4l11.096,11.096c0.487,0.488,1.129,0.732,1.769,0.732   C28.869,30.229,29.506,29.984,29.994,29.496z" fill="#63d60e"></path>
                            </g>
                        </svg>
                        
                        <span>{{ Math.round(perelitiv * 85.71)}} руб.</span>

                    </div>
                </div>

                <div class="steps-paginator" v-if="tableVisibilitylength !== perelitiv">
                    <span>Шаг:</span>
                    <span class="number-left">{{perelitiv + 1}}</span>
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
                    
                    <div class="panel-images-item-wrapper"
                      v-for="item in poll[perelitiv].list" 
                      :key="item.id"
                      :class="{ display_new: !item.img}"
                       @click=" wrapperCounterPlus(tableVisibilitylength); "
                    >
                      <div v-if="item.text">
                        <input type="checkbox"  v-model="item.checkbox"  class="js-checkbox"/>
                        <div class="panel-images-item"
                        >
                          
                          <div v-if="item.img" class="panel-img" :style="'background-image: url(../img/quiz/' + item.img + ');'">
                              <div class="check-icon"></div>
                          </div>
                          
                          <div class="panel-text" >  
                                <div class="check-icon" v-if="!item.img"></div>
                              <span>{{ item.text }}</span>
                          </div>
                        </div>
                      </div>

                      <div v-else>
                        <!--<input type="text"  placeholder="Телефон" />
                        <input type="button"  value="submit">-->
                        <app-form-sending></app-form-sending>
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
    

      <app-Form-Modal v-if="answer"> </app-Form-Modal>
    </div>
    
</template>

<script>
import FormSending from './FormSending'
import FormModal from './FormModal'
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
    ]),
    answer(){
        return this.$store.getters.answer
    }
  },
  components: {
    appFormSending: FormSending,
    appFormModal: FormModal
  },
  methods: {
    wrapperCounterPlus(val){
      let elements = document.querySelectorAll('.js-checkbox');

      for (let elem of elements) {
        console.log(elem); // "тест", "пройден"
        //elem.checked = true
      }
      //this.$store.commit('Vxm', "noll")

      this.counterPlus(val)
    },
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

.list-enter {
  transform: translateY(30px);
}

.list-leave, .list-enter{
  opacity: 0;
}
.list-leave{
  //height: 0;
  display: none;
}


</style>