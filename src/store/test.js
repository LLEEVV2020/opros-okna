import { genVuexModels } from 'vuex-models'
const gggg = [
  {},
  {},
  {}
  /*[
    'Поставить окно', 
    'Остеклить балкон'
  ],
  [
    'В квартиру', 
    'В частный дом'
  ],
  [
    'В панельный дом', 
    'В кирпичный дом'
  ],
  [
    'Veka', 
    'Rehau',
    'KBE', 
    'Artec', 
    'Неважно'
  ],
  [
    'Белое', 
    'Цветное (с ламинацией)'
  ],
  [
    'Да', 
    'Нет'
  ],*/
]

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
    bezottdelki: false,

    pageName: 'Dog',
    poll: [
      {/** 1 */
        name: 'Выберите, поставить окно или остеклить балкон?', 
        leftimg: '157.jpg',
        list: [
          {
            img: '5c1cc65da5e8e2.57496163.png',
            text: 'Поставить окно',
            checkbox: false
          },
          {
            img: '5c1cc65e0c9de5.98850471.png',
            text: 'Остеклить балкон',
            checkbox: false
          }
        ]
      },
      {/** 2 */
        name: 'Будем ставить в квартиру или в частный дом?', 
        leftimg: '165.jpg',
        list: [
          {
            img: '5c1cc6974f5ff9.06336966.jpeg',
            text: 'В квартиру',
            checkbox: false
          },
          {
            img: '5c1cc697690c47.91064385.jpeg',
            text: 'В частный дом',
            checkbox: false
          }
        ]
      },
      {/** 3 */
        name: 'В какой дом нужна установка: в панельный или в кирпичный?', 
        leftimg: '149.jpg',
        list: [
          {
            img: '5c1cc6c936c049.15542903.jpeg',
            text: 'В панельный дом',
            checkbox: false
          },
          {
            img: '5c1cc6c9462524.33902767.jpeg',
            text: 'В кирпичный дом',
            checkbox: false
          }
        ]
      },
      {/** 4 */
        name: 'Какой профиль интересует?', 
        leftimg: '164.jpg',
        list: [
          {
            img: '5c1cd3ec2f1482.08448542.jpeg',
            text: 'Veka',
            checkbox: false
          },
          {
            img: '5c1cc743d27ad0.03039724.jpeg',
            text: 'Rehau',
            checkbox: false
          },
          {
            img: '5c1cc743e8be82.40256857.jpeg',
            text: 'KBE',
            checkbox: false
          },
          {
            img: '5c1cd1b2f371d7.66492810.jpeg',
            text: 'Artec',
            checkbox: false
          },
          {
            img: '5c1cd33fe72b84.46786573.jpeg',
            text: 'Неважно',
            checkbox: false
          }
        ]
      },
      {/** 5 */                
        name: 'Выберите цвет изделия', 
        leftimg: '161.jpg',
        list: [
          {
            img: '5c1cc7eb382994.72069783.jpeg',
            text: 'Белое',
            checkbox: false
          },
          {
            img: '5c1cc7e2ef5ed3.20291533.jpeg',
            text: 'Цветное (с ламинацией)',
            checkbox: false
          }
        ]
      },
      {/** 6 */
        name: 'Вам нужна установка?', 
        leftimg: '156.jpg',
        list: [
          {
            
            text: 'Да',
            checkbox: false
          },
          {
            img: null,
            text: 'Нет',
            checkbox: false
          }
        ]
      },
      {/** 7 */
        name: 'С отделкой или без отделки?', 
        leftimg: '155.jpg',
        list: [
          {
            
            text: 'Да',
            checkbox: false
          },
          {
            text: 'Нет',
            checkbox: false
          }
        ]
      },
      {/** 8 */
        name: 'Оставьте свой номер телефона и мы свяжемся с вами в ближайшие 10 минут!', 
        leftimg: '155.jpg',
        list: [
          {
            
          }
        ]
      }
    ],
    tableVisibilitylength : 8 - 1
    
    

  })

}