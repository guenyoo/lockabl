<template>
  <div class="c-login">
    <p class="c-login__label">
      Please <strong>log in</strong> to your account
    </p>
    <Input
      type="text"
      placeholder="My E-Mail address"
    />
    <Input
      type="password"
      placeholder="My password"
      distance="large"
    />
  </div>
</template>

<script>
import Input from './base/Input.vue';

export default {
  components: {
    Input,
  },
};
</script>

<style>

</style>
