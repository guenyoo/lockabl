<template>
  <div class="add-lock">
    <div class="add-lock__icon" />
    <p class="add-lock__label">
      <strong>Add</strong> new Lock
    </p>
  </div>
</template>

<script>
export default {
  name: 'AddLock',
};
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.add-lock {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (any-hover: hover) {
    &:hover {
      color: $primary;
      cursor: pointer;

      .add-lock__icon {
        border: 2px dashed $primary;
      }
    }
  }

  &__icon {
    width: 100px;
    height: 100px;
    border: 2px dashed black;
    border-radius: 5px;
    opacity: .5;
    font-size: 48px;
    position: relative;
    margin-right: 10px;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '+';
      font-size: 48px;
      transform: translate(-50%, -50%);
      font-weight: bold;
    }
  }

  &__label {
    font-size: 24px;
  }
}
</style>
