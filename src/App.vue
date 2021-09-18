<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
  name: 'App',
  components: { Navbar },
  data: () => ({}),
});
</script>
