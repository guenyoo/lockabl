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
      v-model="selected"
    >
      <option
        v-for="option of options"
        :key="option.value"
        :value="option.value"
        v-text="option.name"
      />
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      selected: 'category',
      options: [
        {
          name: 'Category',
          value: 'category',
        },
        {
          name: 'Connectivity',
          value: 'connectivity',
        },
        {
          name: 'Favorites',
          value: 'favorites',
        },
      ],
    };
  },
  watch: {
    selected: {
      handler() {
        alert('add implementation of select');
      },
    },
  },
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
