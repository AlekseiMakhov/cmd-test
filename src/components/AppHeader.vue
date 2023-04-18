<template>
  <header class="header">
    <a href="/">
      <div class="header__logo"></div>
    </a>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
@import '@/assets/_variables';

.header {
  margin: 0;
  padding: 1rem 2rem;
  display: flex;

  &__logo {
    background-position: center;
    justify-self: flex-start;
    width: 8rem;
    height: 2.5rem;
    object-fit: cover;
    background-size: cover;
    background-image: url("../assets/images/logo.svg");
    opacity: 1;
    transition: $duration;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 35rem) {
  .header {
    padding: 1rem 1.25rem;

    &__logo {
      width: 5rem;
      height: 1.5rem;
      background-image: url("../assets/images/logo_mob.svg");
    }
  }
}
</style>
