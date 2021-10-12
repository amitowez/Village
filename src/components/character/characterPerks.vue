<template>
  <div class="character-block">
    <h2>Способности</h2>
    <Perk v-for="perk in newCheckPerk" :key="perk.id" :perk="perk" />
  </div>
</template>
<script>
import Perk from './Perk.vue';
import perks from '../../data/playerPerk';

export default {
  components: { Perk },
  data() {
    return {
      perks,
    };
  },
  computed: {
    newCheckPerk() {
      return this.perks;
    },
  },
};
</script>
<style scoped>
.character-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}
</style>
