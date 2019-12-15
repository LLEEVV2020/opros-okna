import { genVuexModels } from 'vuex-models'
export default {
  strict: true,
  ...genVuexModels({
    postavitokno: false,
    osteklitbalkon: false,
    vkvartiry: false,
    vchasniidom: false,
    vpanelniidom: false,
    vkirpichiidom: false,
    veka: false,
    rehau: false,
    kbe: false,
    arrec: false,
    nevazno: false,
    cvetbelii: false,
    cvetcvetnoi: false,
    ystanovkayes: false,
    ystanovkano: false,
    cottelkoi: false,
    bezottdelki: false

  })
}