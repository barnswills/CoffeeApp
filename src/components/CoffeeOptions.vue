<template>
  <div>
    <h4 @click="showDrinks">Please select from the following:</h4>
    <div v-for="(d, index) in getDrinks()" v-bind:key="index" class="drink-opt">
      <div selectable :key="index" class="opt-details">
        <v-card-text>
          {{ d.name }} £{{ d.price.toFixed(2) }} {{ getIsVegan(d.isVegan) }}
        </v-card-text>
        <v-btn @click="addToOrder(d)" color="success" icon size="x-small">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <v-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeOptions",
  data() {
    return {
      allDrinks: [],
    };
  },
  mounted() {
    console.log("mounted coffee options");
    this.allDrinks = this.getDrinks();
  },

  methods: {
    showDrinks() {
      //console.log(this.$store.getters.drinks);
    },
    getDrinks() {
      return this.$store.getters.drinks;
    },
    getIsVegan(isVegan) {
      return isVegan ? "V" : "";
    },
    addToOrder(drink) {
      this.$store.commit("increasePrice", drink.price);
      this.$store.commit("addToOrder", drink);
    },
  },
};
</script>

<style>
.drink-opt {
  margin: 8px;
}
.opt-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
}
</style>
