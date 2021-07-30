<template>
  <header class="header">
    <a href="/">
      <div class="header__logo"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  margin: 0;
  padding: 20px 30px;
  display: flex;

  &__logo {
    background-position: center;
    justify-self: flex-start;
    width: 132px;
    height: 42px;
    object-fit: cover;
    background-size: cover;
    background-image: url("../assets/images/logo.svg");
    opacity: 1;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 560px) {
  .header {
    padding: 15px 20px;

    &__logo {
      width: 79px;
      height: 24px;
      background-image: url("../assets/images/logo_mob.svg");
    }
  }
}
</style>