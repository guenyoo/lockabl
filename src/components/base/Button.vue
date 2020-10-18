<template>
  <button
    class="button"
    :style="{
      background: `linear-gradient(180deg, ${colorOne} 0%, ${colorTwo} 100%)`,
      color: colorText,
    }"
    v-html=text
  />
</template>

<script>
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
}
</style>
