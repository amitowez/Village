<template>
  <div class="character-block">
    <h2 style="padding-left: 30px">Характеристики</h2>
    <p class="free-point">Свободные характеристики: {{ freePoint }}</p>
    <PointItem v-for="item in items" :key="items[item]" :item="item" />
    <v-btn style="margin-top: 50px; margin-left: 150px" @click="readyChar">Готов к бою</v-btn>
  </div>
</template>
<script>
import PointItem from './pointItem.vue';

export default {
  components: { PointItem },
  data() {
    return {
      items: this.$store.state.character.specifications,
    };
  },
  computed: {
    freePoint() {
      return this.$store.state.character.specPoint;
    },
  },
  methods: {
    readyChar() {
      this.$store.commit('changeReady', 'character');
      console.log(this.$store.state.readyToBatlle);
      if (!this.$store.state.readyToBatlle.inventory) {
        this.$router.push('inventory');
      } else {
        this.$router.push('battle');
      }
    },
  },
};
</script>
<style scoped>
.free-point {
  margin: 30px;
  font-size: 20px;
}
</style>

