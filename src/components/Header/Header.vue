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
  margin-bottom: 20px;

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
