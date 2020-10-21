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
      <div class="v-locks__signal signal">
        <p class="signal__headline">Signal Strength</p>
        <img
          class="signal__img"
          :src="require(`@/assets/svgs/strength_${getSignalStrength}.svg`)"
          alt="Signal strength"
        >
        <p class="signal__value">{{ signalStrength.toFixed(0) }}%</p>
      </div>
    </div>
    <div>
      <Button
        text="textByStatus()"
        colorText="#00ff00"
        colorBackground="green"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Back from '@/components/Back.vue';
import Lock from '@/components/Lock.vue';
import Button from '@/components/base/Button.vue';

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
    Button,
  },
  data() {
    return {
      signalStrength: 0,
      interval: '',
    };
  },
  computed: {
    ...mapState('lockStore', ['locks']),
    lockDetails() {
      return this.locks.find((lock) => lock.id === parseInt(this.$route.params.lockId, 10));
    },
    getSignalStrength() {
      if (this.signalStrength === 0) return 0;
      if (this.signalStrength > 0 && this.signalStrength <= 25) return 25;
      if (this.signalStrength > 25 && this.signalStrength <= 50) return 50;
      if (this.signalStrength > 50 && this.signalStrength <= 75) return 75;
      return 100;
    },
  },
  mounted() {
    // to simulate some interaction
    this.interval = setInterval(() => {
      const max = 25;
      const min = 0;
      const range = (value) => value * (max - min) + min;
      this.signalStrength = this.locks[this.$route.params.lockId].connectivity;
      this.signalStrength += range(Math.random());
      this.signalStrength -= range(Math.random());
    }, 750);
  },
  beforeDestroy() {
    clearInterval(this.interval);
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
}

.signal {
  &__headline {
    margin: 0;
  }

  &__img {
    width: 170px;
    height: 134px;
  }

  &__value {
    font-weight: bold;
    margin: 0;
  }
}
</style>
