<template>
  <div class="order-container">
    <sui-card style="padding: 15px; margin-bottom: 10px">
      <sui-card-header>
        <h3 is="sui-header">Order</h3>
      </sui-card-header>
      <sui-card-content v-for="(item, index) in getOrder()" v-bind:key="index">
        <sui-card-description>
          {{ item.name }}
          x{{ item.amount}}
          @ £{{item.price.toFixed(2)}}
        </sui-card-description>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "Order",

  methods: {
    getOrder() {
      return this.$store.getters.orderNoDupes;
    }
  }
};
</script>

<style>
.order-container {
  width: 65%;
}
</style>
