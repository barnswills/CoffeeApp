import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      console.log("lets inc");
      state.count++
    }
  },
  getters: {
    count: state => state.count
  }
})