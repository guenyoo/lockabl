<template>
  <div class="v-locks">
    <Back />
    <h1 class="v-locks__headline">
      {{ lockDetails.name }} <i class="icofont-pencil-alt-2 icofont"></i>
    </h1>
    <div class="v-locks__content">
      <Lock
        :id="lockDetails.id"
        :color="lockDetails.color"
        :key="lockDetails.name"
        :name="lockDetails.name"
        :isFavorite="lockDetails.favorite"
        :hasConnectivity="!!lockDetails.connectivity"
        isLarge
      />
      <div class="v-locks__signal">
        <img
          class="v-locks__strength"
          :src="require(`@/assets/svgs/strength_${getSignalStrength()}.svg`)"
          alt="Signal strength"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Back from '@/components/Back.vue';
import Lock from '@/components/Lock.vue';

export default {
  name: 'LockDetailView',
  params: {
    lockId: {
      type: String,
      required: true,
    },
  },
  components: {
    Back,
    Lock,
  },
  computed: {
    ...mapState('lockStore', ['locks']),
    lockDetails() {
      return this.locks.find((lock) => lock.id === parseInt(this.$route.params.lockId, 10));
    },
  },
  methods: {
    getSignalStrength() {
      if (this.lockDetails.connectivity === 0) return 0;
      if (this.lockDetails.connectivity > 0 && this.lockDetails.connectivity <= 25) return 25;
      if (this.lockDetails.connectivity > 25 && this.lockDetails.connectivity <= 50) return 50;
      if (this.lockDetails.connectivity > 50 && this.lockDetails.connectivity <= 75) return 75;
      return 100;
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

  &__content {
    position: relative;
    display: flex;
  }

  .icofont-wifi {
    font-size: 170px;
  }

  &__strength {
    width: 170px;
    height: 170px;
  }
}
</style>
