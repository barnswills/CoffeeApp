<template>
  <div id="app">
    <sui-button @click="test">Hello</sui-button>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    test: function() {
      console.log("Inked");
      this.$store.commit('increment');
    }
  },
  mounted() {
    console.log("App mounted!");
  }
};
</script>

<style>
</style>
