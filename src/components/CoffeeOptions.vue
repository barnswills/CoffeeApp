<template>
  <div>
    <h4 is="sui-header" @click="showDrinks">Please select from the following:</h4>
    <sui-segments v-for="(d, index) in getDrinks()" v-bind:key="index">
      <sui-segment selectable :key="index">
        <h5 is="sui-header">
          {{d.name}} £{{d.price.toFixed(2)}} {{getIsVegan(d.isVegan)}}
          <sui-button @click="addToOrder(d)" color="green" circular floated="right" icon="add"/>
        </h5>
      </sui-segment>
    </sui-segments>
  </div>
</template>

<script>
export default {
  name: "CoffeeOptions",

  methods: {
    showDrinks() {
      console.log(this.$store.getters.drinks);
    },
    getDrinks() {
      return this.$store.getters.drinks;
    },
    getIsVegan(isVegan) {
      if (isVegan) {
        return "V";
      } else {
        return "";
      }
    },
    addToOrder(drink) {
      //console.log(drink);
      this.$store.commit("increasePrice", drink.price);
      this.$store.commit("addToOrder", drink);
    }
  }
};
</script>

<style></style>

