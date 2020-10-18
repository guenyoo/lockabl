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
    <Button
      colorOne="#C2F0FF"
      colorTwo="#A3E8FF"
      :colorText="COLORS.PRIMARY"
      text="<strong>Sign me in</strong>"
    />
  </div>
</template>

<script>
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
    };
  },
};
</script>

<style>

</style>
