<template>
  <v-card class="price-container">
    <v-card-title style="padding: 15px">
      <h3>Total: £{{ this.$store.getters.totalPrice.toFixed(2) }}</h3>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "TotalPrice",
  data() {
    return {
      total: 0,
    };
  },
};
</script>

<style>
.price-container {
  width: fit-content;
}
</style>
