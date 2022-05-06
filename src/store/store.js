import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
    drinks: [
      { name: "Latte", price: 1, isVegan: false },
      { name: "Americano", price: 0.75, isVegan: true },
      { name: "Milk", price: 0.25, isVegan: false },
      { name: "Spring Water", price: 0.65, isVegan: true },
      { name: "Mocha", price: 0.85, isVegan: false },
      { name: "Sparkling Water", price: 0.35, isVegan: true }
    ],
    order: [],
    orderNoDupes: [],
    totalPrice: 0
  },
  mutations: {
    addToOrder(state, drink) {
      state.order.push(drink);
      state.orderNoDupes = [];

      // create a new order array with amount of pruchases and rpice
      state.drinks.forEach(d => {
        let amount = 0;
        let price = 0;

        state.order.forEach(o => {
          if (d.name === o.name) {
            amount++;
            price = d.price * amount;
          }
        });

        // only add if the item has been ordered
        if (amount !== 0) {
          state.orderNoDupes.unshift({
            name: d.name,
            amount: amount,
            price: price
          });
        }
      });
    },
    increasePrice(state, price) {
      state.totalPrice += price;
    },
    // reset everything on the ui
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

export default store;
