<template>
  <input
    class="c-input"
    :class="{ 'c-input--large': distance }"
    :type=type
    :placeholder=placeholder
    @input="$emit('input-change', { type, value: $event.target.value })"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.c-input {
  border-radius: 5px;
  display: block;
  margin: 10px auto;
  padding: 0 10px;
  max-width: 335px;
  width: 100%;
  height: 40px;
  border: 1px solid #DBDBDB;
  background: $white;

  &--large {
    margin-bottom: 40px;
  }
}
</style>
