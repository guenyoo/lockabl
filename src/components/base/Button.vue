<template>
  <button
    class="button"
    :class="[
      { 'button--disabled': disabled },
      colorBackground ? `button--${colorBackground}` : '',
    ]"
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
    colorBackground: {
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
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.button {
  height: 48px;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;

  &--neutral {
    background: linear-gradient(180deg, #D8E0D8 0%, #CFCFCF 100%);
    color: $neutral;
  }

  &--blue {
    background: linear-gradient(180deg, #C2F0FF 0%, #A3E8FF 100%);
    color: $primary;
  }

  &--yellow {
    background: linear-gradient(180deg, #FFF9C2 0%, #FFD43C 100%);
    color: $yellow;
  }

  &--red {
    background: radial-gradient(80.71% 158.59% at 50% 112.12%, #FF0000 0%, #FF0000 100%);
    color: black;
  }

  &--green {
    background: linear-gradient(180deg, #86EC8A 0%, #35CD69 100%);
    color: $green;
  }

  &--disabled {
    background: linear-gradient(180deg, #D8E0D8 0%, #CFCFCF 100%);
    color: $neutral;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
