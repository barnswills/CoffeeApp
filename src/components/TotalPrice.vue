<template>
<div class="price-container">
  <sui-segment>Total: £{{$store.getters.totalPrice.toFixed(2)}}</sui-segment></div>
</template>

<script>
export default {
  name: "TotalPrice"
}
</script>

<style>
.price-container {
  width: 65%;
}
</style>
