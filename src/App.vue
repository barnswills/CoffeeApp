<template>
  <div id="app" class="coffee-card-container">
    <sui-card>
      <sui-card-header style="padding: 20px; text-align: center;">
        <h1 is="sui-header">Coffee App</h1>
      </sui-card-header>
      <sui-card-content>
        <CoffeeOptions></CoffeeOptions>
      </sui-card-content>
    </sui-card>

    <TotalPrice></TotalPrice>
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
    test: function() {
      console.log("Inked");
      this.$store.commit("increment");
    }
  },
  mounted() {
    console.log("App mounted!");
  }
};
</script>

<style>
.coffee-card-container {
  margin: 20px;
}
</style>
