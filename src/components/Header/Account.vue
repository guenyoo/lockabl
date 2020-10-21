<template>
  <div
    @click="routeToLogout()"
    class="account"
  >
    <img
      class="account__icon"
      src="@/assets/svgs/user.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Account',
  methods: {
    routeToLogout() {
      this.$router.push('/Logout');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.account {
  cursor: pointer;

  &__icon {
    width: 20px;
    height: 20px;
    color: $primary;
  }
}
</style>
