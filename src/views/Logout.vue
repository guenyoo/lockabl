<template>
  <div>
    <Header />
    <div class="u-content">
      <Back />
      <Logout />
    </div>
    <Footer />
  </div>
</template>

<script>
import Back from '@/components/Back.vue';
import Logout from '@/components/Logout.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header/Header.vue';

export default {
  components: {
    Back,
    Logout,
    Header,
    Footer,
  },
};
</script>

<style>

</style>
