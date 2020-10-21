<template>
  <div @click="routeToLogout()">
    Account
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

<style>

</style>
