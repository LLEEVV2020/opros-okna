<template>
    
  <transition name="modal">
      <div class="modal-mask">
          <div class="modal-wrapper">
              <div class="modal-container">

              <div class="modal-header">
                  <slot name="header">
                  <h1>Модальное окно </h1>
                  </slot>
              </div>

              <div class="modal-body">
                  <slot name="body">
                  <h2>-- подзаголовок --</h2>
                  </slot>
              </div>

              <div class="modal-footer">
                  <slot name="footer">
                  Закрыть
                  <button 
                      class="modal-default-button" 
                      @click="answer = false"
                  >
                      OK
                  </button>
                  <input
                      type="checkbox"
                      v-model="answer"
                  >
                  </slot>
              </div>
              </div>
          </div>
      </div>
  </transition>
    
</template>

<script>

export default {

   

    computed: {
      
        answer: {
            get: function () {
                return this.$store.getters.answer
            },
            set: function (val) {
                //this.$store.commit('answer', val)
                this.$store.dispatch('answer', {
                    counterValue: val
                })
            }
        },
        
    },
    methods: {
        
    }

}
</script>

<style lang="scss">
 
 .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .83s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

 
</style>