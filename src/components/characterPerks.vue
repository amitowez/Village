<template>
  <div class="character-block">
    <h2>Способности</h2>
    <Perk v-for="perk in perks" :key="perk.id" :perk="perk" />
  </div>
</template>
<script>
import Perk from './Perk.vue';
import perks from '../data/playerPerk';

export default {
  components: { Perk },
  data() {
    return {
      perks,
    };
  },
};
</script>
<style scoped>

</style>
