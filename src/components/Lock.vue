<template>
  <div
    class="lock"
    :class="[
      {
        'lock--not-in-range': !hasConnectivity,
        'lock--is-large': isLarge,
      },
      hasColor,
    ]"
    @click="showDetails(id)"
  >
    <i
      class="lock__icon icofont-pencil-alt-2"
      v-if="isEdit"
    />
    <img
      v-show="isFavorite"
      src="@/assets/svgs/heart.svg"
      class="lock__favorite"
    >
    <h1
      class="lock__name"
      :class="{ 'lock__name--is-large': isLarge }"
      v-text="name"
    />
  </div>
</template>

<script>
export default {
  name: 'Lock',
  props: {
    id: {
      type: Number,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
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
    isLarge: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasColor() {
      return this.color ? `lock--${this.color}` : '';
    },
  },
  methods: {
    showDetails(id) {
      if (this.isLarge) {
        return;
      }
      this.$router.push(`/locks/${id}`);
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

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

  &--bicycle {
    background: url('~@/assets/imgs/bicycle.jpg') no-repeat no-repeat;
    background-size: cover;
  }

  &--scooter {
    background: url('~@/assets/imgs/scooter2.png') no-repeat no-repeat;
    background-size: cover;
  }

  &--not-in-range {
    opacity: .5;
  }

  &__name {
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 90px;

    text-shadow:
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;
  }

  &__favorite {
    top: 5px;
    right: 5px;
    position: absolute;
    width: 20px;
    height: 20px;
  }

  &--is-large {
    width: 170px;
    height: 170px;

    .lock__name {
      display: none;
    }

    .lock__favorite {
      display: none;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    font-size: 30px;
    transform: translate(-50%, -50%);
  }

  @media (any-hover: hover) {
    &:hover {
      color: $primary;
      cursor: pointer;
    }
  }
}
</style>
