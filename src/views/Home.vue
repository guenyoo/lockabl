<template>
  <div class="home">
    <Header />
    <Accordeon>
      <template v-slot:title>
        <span>Test Title</span>
      </template>
      <template v-slot:content>
        <p>Test Content</p>
      </template>
    </Accordeon>
  </div>
</template>

<script>
import Accordeon from '@/components/Accordeon.vue';
import Header from '@/components/Header/Header.vue';

export default {
  name: 'Home',
  components: {
    Accordeon,
    Header,
  },
};
</script>
