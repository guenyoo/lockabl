<template>
  <input
    class="c-input"
    :type=type
    :placeholder=placeholder
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
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.c-input {
  padding: 5px;
  max-width: 335px;
  width: 100%;
  height: 40px;
  border: 1px solid #DBDBDB;
  background: $white;
}
</style>
