<template>
  <div id="app" class="coffee-card-container">
    <v-card>
      <v-card-title style="padding: 20px; text-align: center">
        <h1>Coffee App</h1>
      </v-card-title>
      <v-card-text>
        <CoffeeOptions></CoffeeOptions>
      </v-card-text>
    </v-card>
    <div v-if="isEmpty()">
      <Order></Order>
      <TotalPrice></TotalPrice>
    </div>

    <div class="buttons-container">
      <v-btn color="success">Proceed</v-btn>
      <v-btn color="error" @click="clearOrder">Clear</v-btn>
    </div>
  </div>
</template>

<script>
import CoffeeOptions from "./components/CoffeeOptions";
import Order from "./components/Order";
import TotalPrice from "./components/TotalPrice";
export default {
  name: "App",
  components: { CoffeeOptions, Order, TotalPrice },
  methods: {
    clearOrder: function () {
      this.$store.commit("clearOrder");
    },
    isEmpty() {
      return this.$store.getters.order.length > 0;
    },
  },
  mounted() {
    console.log("App mounted!");
  },
};
</script>

<style>
.coffee-card-container {
  margin: 20px;
}
.buttons-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
.v-btn {
  margin-right: 10px;
}
</style>
