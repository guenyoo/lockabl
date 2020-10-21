<template>
  <div class="home">
    <Header />
    <Accordeon>
      <template v-slot:title>
        <span>Test Title</span>
      </template>
      <template v-slot:content>
        <div class="home__flex-wrapper">
          <Lock
          v-for="lock in LOCKS"
          :key="lock.name"
          :name="lock.name"
          :isFavorite="lock.favorite"
          :hasConnectivity="!!lock.connectivity"
        />
        </div>
      </template>
    </Accordeon>
  </div>
</template>

<script>
import Accordeon from '@/components/Accordeon.vue';
import Header from '@/components/Header/Header.vue';
import Lock from '@/components/Lock.vue';
import { LOCKS } from '@/config/locks';

export default {
  name: 'Home',
  data() {
    return {
      LOCKS,
    };
  },
  components: {
    Accordeon,
    Header,
    Lock,
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__flex-wrapper {
    display: flex;
  }
}
</style>
