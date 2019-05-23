import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //商品列表
      goods:[
        {name: "洗发露", isSelect: false, price: 20.5, num: 1, imgSrc: '/images/pic01.jpg'},
        {name: "T恤", isSelect: false, price: 50.2, num: 1, imgSrc: '/images/pic09.jpg'},
        {name: "牛仔裤", isSelect: false, price: 60, num: 1, imgSrc: '/images/pic11.jpg'},
      ],

      //轮播图片
      images:[
        {imgSrc: '/images/pic01.jpg', title: '图片1'},
        {imgSrc: '/images/pic07.jpg', title: '图片1'},
        {imgSrc: '/images/pic08.jpg', title: '图片1'},
        {imgSrc: '/images/pic09.jpg', title: '图片1'},
        {imgSrc: '/images/pic11.jpg', title: '图片1'},
      ],
      
  },
  getters:{

  },
  mutations: {
    increment(state, datas){
      for(var i = 0; i < state.goods.length; i++){
        if(state.goods[i].name == datas.name){
          state.goods[i].num ++;
          break;
        }
      }
    },

    decrement(state,datas){
      for(var i = 0; i < state.goods.length; i++){
        if(state.goods[i].name == datas.name){
          state.goods[i].num --;
          break;
        }
      }
    },

    checkgoods(state,datas){
      for(var i = 0; i < state.goods.length; i++){
        if(state.goods[i].name == datas[0].name){
          state.goods[i].isSelect = datas[1];
          break;
        }
      }
    },

  },
  actions: {
    increment: ({commit}, datas) => commit('increment',datas),
    decrement: ({commit}, datas) => commit('decrement',datas),
    checkgoods: ({commit}, datas) => commit('checkgoods',datas),

  }
})
