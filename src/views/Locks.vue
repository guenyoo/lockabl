<template>
  <div class="v-locks">
    <Back />
    <h1 class="v-locks__headline">
      {{ lockDetails.name }} <i class="icofont-pencil-alt-2 icofont"></i>
    </h1>
    {{ $route.params.lockId }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Back from '@/components/Back.vue';

export default {
  name: 'Lock Detail View',
  params: {
    lockId: {
      type: String,
      required: true,
    },
  },
  components: {
    Back,
  },
  computed: {
    ...mapState('lockStore', ['locks']),
    lockDetails() {
      return this.locks.find((lock) => lock.id === parseInt(this.$route.params.lockId, 10));
    },
  },
};
</script>

<style lang="scss" scoped>
.icofont {
  font-size: 30px;
}

.v-locks {
  &__headline {
    font-size: 36px;
  }
}
</style>
