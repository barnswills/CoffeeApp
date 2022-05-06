<template>
  <div class="order-container">
    <v-card style="padding: 15px; margin-bottom: 10px">
      <v-card-title> Order </v-card-title>
      <div v-for="(item, index) in getOrder()" v-bind:key="index">
        <v-card-text>
          {{ item.name }}
          x{{ item.amount }} @ £{{ item.price.toFixed(2) }}
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Order",

  methods: {
    getOrder() {
      return this.$store.getters.orderNoDupes;
    },
  },
};
</script>

<style>
.order-container {
  width: fit-content;
  margin-top: 10px;
}
</style>
