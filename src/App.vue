<template>
  <div id="app">
    <app-header />
    <page-content />
  </div>
</template>

<script lang="js">
import AppHeader from "./components/AppHeader.vue";
import PageContent from "./components/PageContent.vue";

export default {
  name: "App",
  components: {
    AppHeader,
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
