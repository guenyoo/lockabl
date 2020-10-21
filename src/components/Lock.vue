<template>
  <div
    class="lock"
    :class="[
      {
        'lock--not-in-range': !hasConnectivity,
      },
      hasColor,
    ]"
  >
    <h1
      class="lock__name"
      v-text="name"
    />
    <span
      v-show="isFavorite"
      class="lock__favorite"
    >
      💙
    </span>
  </div>
</template>

<script>
export default {
  name: 'Lock',
  props: {
    isFavorite: {
      type: Boolean,
      default: false,
    },
    hasConnectivity: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasColor() {
      return this.color ? `lock--${this.color}` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.lock {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid $border;
  position: relative;
  background: linear-gradient(180deg, #C4C4C4 0%, #A6A6A6 100%);
  margin: 0 10px 10px 0;

  &--purple {
    background: radial-gradient(80.71% 158.59% at 50% 112.12%, #FF63F9 0%, #BE34FF 100%);
  }

  &--blue {
    background: radial-gradient(80.71% 158.59% at 50% 112.12%, #6398FF 0%, #3448FF 100%);
  }

  &--green {
    background: radial-gradient(80.71% 158.59% at 50% 112.12%, #95FF63 0%, #1CC500 100%);
  }

  &--red {
    background: radial-gradient(80.71% 158.59% at 50% 112.12%, #FF0000 0%, #FF0000 100%);
  }

  &--not-in-range {
    opacity: .5;
  }

  &__name {
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    margin: 0;

    text-shadow:
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;
  }

  &__favorite {
    top: 10px;
    right: 10px;
    position: absolute;
    width: 10px;
    height: 10px;
  }

  @media (any-hover: hover) {
    &:hover {
      color: $primary;
      cursor: pointer;
    }
  }
}
</style>
