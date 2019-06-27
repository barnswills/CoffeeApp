import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    drinks: [
      { id: 1, name: "Latte", price: 1, isVegan: false },
      { id: 2, name: "Black", price: 0.5, isVegan: true }
    ],
    order: [],
    totalPrice: 0
  },
  mutations: {
    increment(state) {
      console.log("lets inc");
      state.count++;
    }
  },
  getters: {
    count: state => state.count,
    drinks: state => state.drinks
  }
});
