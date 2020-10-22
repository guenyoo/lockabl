<template>
  <div class="login">
    <div class="u-content">
      <h1 class="login__headline"><strong>Welcome</strong> to</h1>
      <img
        src="@/assets/lockable_logo.png"
        alt="Welcome to Lockabl"
        class="login__logo"
      >
      <LogIn />
    </div>
    <Footer />
  </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    LogIn,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 40px;

  &__headline {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0;
  }

  &__logo {
    max-width: 230px;
  }
}
</style>
