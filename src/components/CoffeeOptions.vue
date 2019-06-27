<template>
  <div>
    <h4 is="sui-header" @click="showDrinks">Please select from the following:</h4>
    <sui-segments v-for="d in getDrinks()" v-bind:key="d.id">
      <sui-segment selectable :key="d.id">
        <h5 is="sui-header">
          {{d.name}} £{{d.price.toFixed(2)}} {{getIsVegan(d.isVegan)}}
          <sui-button color="green" circular floated="right" icon="add"/>
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
    addToOrder(drink) {}
  }
};
</script>

<style></style>

