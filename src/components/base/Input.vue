<template>
  <input
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

<style>

</style>
