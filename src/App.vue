<template>
  <div id="app">
    <Header />
    <PageContent />
  </div>
</template>

<script>
import './assets/fonts/Manrope.css'
import Header from "./components/Header.vue";
import PageContent from "./components/PageContent.vue";

export default {
  name: "App",
  components: {
    Header,
    PageContent,
  },
};
</script>

<style>
#app {
  font-family: Manrope, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #808080;
  position: relative;
  min-width: 320px;
}
</style>
