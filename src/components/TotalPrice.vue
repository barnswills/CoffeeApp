<template>
  <div>
    <sui-card>
      <sui-card-header style="padding: 15px;">
        <h3 is="sui-header">Total: £{{$store.getters.totalPrice.toFixed(2)}}</h3>
      </sui-card-header>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "TotalPrice"
};
</script>

<style>
.price-container {
  width: 65%;
}
</style>
