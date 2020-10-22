<template>
  <header class="header">
    <BurgerNavi />
    <img
      class="header__logo"
      src="@/assets/lockable_logo.png"
      alt=""
    >
    <Account />
  </header>
</template>

<script>
import BurgerNavi from './BurgerNavi.vue';
import Account from './Account.vue';

export default {
  name: 'Header',
  components: {
    BurgerNavi,
    Account,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.header {
  background-color: $secondary;
  height: 73px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 0 -10px 20px -10px;

  &__logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
