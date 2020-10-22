<template>
  <div class="home">
    <Header />
    <div class="u-content">
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
            :id="lock.id"
            :color="lock.color"
            :key="lock.name"
            :name="lock.name"
            :isFavorite="lock.favorite"
            :hasConnectivity="!!lock.connectivity"
          />
          </div>
        </template>
      </Accordeon>
      <AddLock />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Accordeon from '@/components/Accordeon.vue';
import Header from '@/components/Header/Header.vue';
import Lock from '@/components/Lock.vue';
import AddLock from '@/components/AddLock.vue';

export default {
  name: 'Home',
  data() {
    return {
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
    AddLock,
  },
  computed: {
    ...mapState('lockStore', ['locks']),
    ...mapGetters('lockStore', ['locksSortedByConnectivity', 'locksWithoutConnectivity', 'sharedLocks']),
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
    flex-wrap: wrap;
  }
}
</style>
