<template>
  <p
    class="logout"
    @click="logoutUser()"
  >
    Log out
  </p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Logout',
  methods: {
    ...mapActions('user', ['logout']),
    logoutUser() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.logout {
  text-decoration: underline;
}
</style>
