<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/screen.scss";
</style>

<script>
export default {
  // Standard Title
  watch: {
    $route(to, from) {
      document.title =
        to.meta.title ||
        "Co Order your food and drinks! | Providing an even better service";
    }
  }
};
</script>