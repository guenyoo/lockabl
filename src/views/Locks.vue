<template>
  <div class="v-locks">
    <div class="u-content">
      <Back />
      <h1
        class="v-locks__headline"
        @click="alert('add implementation of name change')"
      >
        {{ lockDetails.name }} <i class="icofont-pencil-alt-2 icofont" />
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
          isEdit
          @click.native="alert('add implementation of imgs/colors')"
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
      <div class="v-locks__buttons">
        <Button
          :text="textByStatus"
          colorText="#00ff00"
          colorBackground="green"
          :disabled="checkStatus"
          @click.native="alert('add unlock implementation')"
        />
        <Button
          :text="textByFavorites"
          :colorText="COLORS.PRIMARY"
          colorBackground="blue"
          @click.native="alert('add favorites implementation')"
        />
        <Button
          text="<strong>Share</strong> with <strong>Friends / Family</strong>"
          :colorText="COLORS.PRIMARY"
          colorBackground="blue"
          @click.native="alert('add sharing implementation')"
        />
      </div>
      <div
        class="v-locks__shared shared"
        v-if="lockDetails.sharedWith.length"
      >
        <p class="v-locks__label shared__label">
          This lock is currently <strong>shared with</strong>:
        </p>
        <div class="shared__content">
          <div
            class="shared__loop"
            v-for="sharedLock of lockDetails.sharedWith"
            :key="sharedLock.userId"

          >
            <Lock
              class="shared__lock"
              :id="lockDetails.id"
              :color="sharedLock.color"
              :name="sharedLock.name"
              :hasConnectivity="true"
            />
            <Button
              text="Revoke Access"
              :colorText="COLORS.PRIMARY"
              colorBackground="neutral"
              @click.native="removeFromShared({ lockId: lockDetails.id, uid: sharedLock.userId })"
            />
          </div>
        </div>
      </div>
      <div class="v-locks__help">
        <p class="v-locks__label">Do you <strong>need help</strong> with this lock?</p>
        <Button
          text="<strong>Get help</strong> from <strong>support</strong> (opens Browser)"
          :colorText="COLORS.PRIMARY"
          colorBackground="yellow"
        />
        <Button
          text="<strong>FAQ</strong> pages (opens browser)"
          :colorText="COLORS.PRIMARY"
          colorBackground="yellow"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Back from '@/components/Back.vue';
import Lock from '@/components/Lock.vue';
import Footer from '@/components/Footer.vue';
import Button from '@/components/base/Button.vue';
import { COLORS } from '@/config/colors';
import { LOCKSTATUS } from '@/config/status';

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
    Footer,
  },
  data() {
    return {
      COLORS,
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
      if (this.signalStrength <= 10) return 0;
      if (this.signalStrength > 10 && this.signalStrength <= 25) return 25;
      if (this.signalStrength > 25 && this.signalStrength <= 50) return 50;
      if (this.signalStrength > 50 && this.signalStrength <= 75) return 75;
      return 100;
    },
    checkStatus() {
      if (this.lockDetails.status === LOCKSTATUS.UNLOCKED) {
        return true;
      }
      return false;
    },
    textByStatus() {
      let buttonText;
      switch (this.lockDetails.status) {
        case 'locked':
          buttonText = '<strong>Unlock</strong>';
          break;
        case 'unlocked':
          buttonText = 'Please lock <strong>manually</strong>';
          break;
        case 'unlocking':
          buttonText = '<strong>Unlocking</strong> ...';
          break;
        default:
          buttonText = '<strong>Unlock</strong>';
          break;
      }
      return buttonText;
    },
    textByFavorites() {
      let buttonText;
      switch (this.lockDetails.favorite) {
        case true:
          buttonText = '<strong>Remove</strong> from <strong>Favorites</strong>';
          break;
        case false:
          buttonText = '<strong>Add</strong> to <strong>Favorites</strong>';
          break;
        default:
          buttonText = '<strong>Add</strong> to <strong>Favorites</strong>';
          break;
      }
      return buttonText;
    },
  },
  methods: {
    ...mapActions('lockStore', ['removeFromShared']),
    alert(msg) {
      window.alert(msg);
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
      if (this.signalStrength < 0) {
        this.signalStrength = 0;
      }
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
    text-align: left;
    font-size: 36px;
  }

  &__content {
    position: relative;
    display: flex;
    margin-bottom: 20px;
  }

  .icofont-wifi {
    font-size: 170px;
  }

  &__label {
    text-align: left;
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

.shared {
  &__loop {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__lock {
    flex-basis: 100px;
    flex-shrink: 0;
  }
}
</style>
