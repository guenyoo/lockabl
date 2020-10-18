<template>
  <button
    class="button"
    :class="{ 'button--disabled': disabled }"
    :style="{
      background: disabledCheckBackgroundColor,
      color: disabledCheckColorText,
    }"
    v-html=text
    :disabled="disabled"
  />
</template>

<script>
import { COLORS } from '@/config/colors';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    colorOne: {
      type: String,
      required: true,
    },
    colorTwo: {
      type: String,
      required: true,
    },
    colorText: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    disabledCheckBackgroundColor() {
      if (this.disabled) {
        return COLORS.GREY;
      }

      return `linear-gradient(180deg, ${this.colorOne} 0%, ${this.colorTwo} 100%)`;
    },
    disabledCheckColorText() {
      if (this.disabled) {
        return COLORS.GREYDARK;
      }

      return this.colorText;
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 48px;
  max-width: 335px;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &--disabled {
    background-color: #cdcdcd;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
