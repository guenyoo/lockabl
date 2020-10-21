<template>
  <p
    class="back"
    v-text="'< Back'"
    @click="$router.push('/Home')"
  />
</template>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.back {
  text-align: left;
  text-decoration: underline;
  cursor: pointer;
  color: $primary;
}
</style>
