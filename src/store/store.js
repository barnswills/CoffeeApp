import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    drinks: [
      { name: "Latte", price: 1, isVegan: false },
      { name: "Americano", price: 0.75, isVegan: true },
      { name: "Milk", price: 0.25, isVegan: false },
      { name: "Spring Water", price: 0.65, isVegan: true }
    ],
    order: [],
    orderNoDupes: [],
    totalPrice: 0
  },
  mutations: {
    increment(state) {
      console.log("lets inc");
      state.count++;
    },
    addToOrder(state, drink) {
      state.order.push(drink);
      state.orderNoDupes = [];

      state.drinks.forEach(d => {
        let amount = 0;

        state.order.forEach(o => {
          if (d.name === o.name) {
            amount++;
          }
        });

        if (amount !== 0) {
          state.orderNoDupes.unshift({ name: d.name, amount: amount });
        }
      });
    },
    increasePrice(state, price) {
      state.totalPrice += price;
    },
    clearOrder(state) {
      state.totalPrice = 0;
      state.order = [];
      state.orderNoDupes = [];
    }
  },
  getters: {
    count: state => state.count,
    drinks: state => state.drinks,
    totalPrice: state => state.totalPrice,
    order: state => state.order,
    orderNoDupes: state => state.orderNoDupes
  }
});
