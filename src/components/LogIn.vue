<template>
  <div class="c-login">
    <div v-if="!userAuthenticated">
      <p class="c-login__label">
        Please <strong>log in</strong> to your account
      </p>
      <Input
        type="text"
        placeholder="My E-Mail address"
        @input-change="handleInputChange($event)"
      />
      <Input
        type="password"
        placeholder="My password"
        distance="large"
        @input-change="handleInputChange($event)"
      />
      <Button
        colorOne="#C2F0FF"
        colorTwo="#A3E8FF"
        :colorText="COLORS.PRIMARY"
        text="<strong>Sign me in</strong>"
        :disabled="isDisabled"
        @click.native="setUserLoggedIn()"
      />
      <p>or</p>
      <div class="c-login__account-wrapper">
        <a href="#" alt="Go to Password reset">I forgot my password</a>
        <a href="#" alt="Go to Account creation">Create an account</a>
      </div>
    </div>
    <div v-else>
      You are already logged in
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { COLORS } from '@/config/colors';
import Input from './base/Input.vue';
import Button from './base/Button.vue';

export default {
  components: {
    Input,
    Button,
  },
  data() {
    return {
      COLORS,
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState('user', ['userAuthenticated']),
    isDisabled() {
      if (!(this.email && this.password)) {
        return true;
      }

      return false;
    },
  },
  methods: {
    ...mapActions('user', ['authenticateUser']),
    handleInputChange({ type, value }) {
      if (type === 'text') {
        this.email = value;
      } else {
        this.password = value;
      }
    },
    setUserLoggedIn() {
      this.authenticateUser();
      this.$router.push('home');
    },
  },
};
</script>

<style lang="scss" scoped>
.c-login {
  &__account-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 335px;
    margin: 0 auto;
  }
}
</style>
