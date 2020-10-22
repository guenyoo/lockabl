<template>
  <div class="select">
    <label
      class="select__label"
      for="select__content"
    >
      Sort By
    </label>
    <select
      class="select__content"
      id="select__content"
    >
      <option value="category">Category</option>
      <option value="connectivity">Connectivity</option>
      <option value="favorites">Favorites</option>
    </select>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.select {
  text-align: right;
  margin-bottom: 20px;

  &__label {
    margin-right: 10px;
  }

  &__content {
    border-radius: 5px;
    height: 40px;
    min-width: 150px;
  }
}
</style>
