<template>
  <div class="home">
    <Header />
    <Accordeon
      v-for="category in filteredCategories"
      :key="category.title"
    >
      <template v-slot:title>
        <span>{{ category.title }}</span>
      </template>
      <template v-slot:content>
        <div class="home__flex-wrapper">
          <Lock
          v-for="lock in category.locks"
          :color="lock.color"
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
      categories: [
        {
          title: 'Locks near you',
          locks: [],
        },
        {
          title: 'Locks without connectivity',
          locks: [],
        },
        {
          title: 'Friends and Family shared locks',
          locks: [],
        },
      ],
    };
  },
  components: {
    Accordeon,
    Header,
    Lock,
  },
  computed: {
    locksSortedByConnectivity() {
      return LOCKS.sort((a, b) => b.connectivity - a.connectivity);
    },
    locksWithoutConnectivity() {
      return LOCKS.filter((lock) => lock.connectivity === 0);
    },
    sharedLocks() {
      return LOCKS.filter((lock) => lock.sharedWith.length > 0);
    },
    filteredCategories() {
      return this.categories.filter((category) => category.locks.length);
    },
  },
  mounted() {
    this.categories[0].locks = this.locksSortedByConnectivity;
    this.categories[1].locks = this.locksWithoutConnectivity;
    this.categories[2].locks = this.sharedLocks;
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
