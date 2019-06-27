import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    drinks: [
      { id: 1, name: "Latte", price: 1, isVegan: false },
      { id: 2, name: "Black", price: 0.75, isVegan: true },
      { id: 3, name: "Milk", price: 0.25, isVegan: false },
      { id: 4, name: "Spring Water", price: 0.65, isVegan: true }
    ],
    order: [],
    totalPrice: 0
  },
  mutations: {
    increment(state) {
      console.log("lets inc");
      state.count++;
    },
    addToOrder(state, drink) {
      state.order.push(drink);
    },
    increasePrice(state, price) {
      state.totalPrice += price;
    }
  },
  getters: {
    count: state => state.count,
    drinks: state => state.drinks,
    totalPrice: state => state.totalPrice,
    order: state => state.order
  }
});
