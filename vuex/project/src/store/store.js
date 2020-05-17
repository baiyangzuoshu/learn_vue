import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict:true,
  state: {
    products:[
      {name:"mm",price:980},
      {name:"seg",price:822},
      {name:"wwh",price:289},
      {name:"adfdg",price:23239},
      {name:"agg",price:3230},
      {name:"al;odfp",price:234}
    ]
  },

  getters: {
    saleProducts: (state) => {
      var saleProducts=state.products.map(
        product=>{
          return {
            name:".."+product.name,
            price:product.price
          }
        }
      );
      return saleProducts;
    }
  },

  mutations: {
    reducePrice:(state,payload) => {
      state.products.forEach(product=>{
        product.price-=payload;
      })
    }
  },

  actions: {
    reducePrice: (context,payload) => {
      setTimeout(() => {
        context.commit("reducePrice",payload);
      },2000)
    }
  }
});
