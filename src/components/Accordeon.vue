<template>
  <div class="accordeon">
    <div
      class="accordeon__title"
      @click="toggle()"
    >
      <img
        :class="['accordeon__triangle', toggled ? 'accordeon__triangle--toggled' : '']"
        src="@/assets/svgs/triangle.svg"
        alt=""
      >
      <slot name="title" />
    </div>
    <div
      class="accordeon__content"
      v-show=!toggled
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordeon',
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordeon {
  margin-bottom: 20px;

  &__triangle {
    max-width: 20px;
    transition: .3s transform ease-out;
    margin-right: 10px;
  }

  &--toggled {
    transform: rotate(-90deg);
  }

  &__title {
    text-align: left;
    margin-bottom: 10px;
  }
}
</style>
