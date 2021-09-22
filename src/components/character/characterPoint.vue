<template>
  <div class="character-block">
    <h2>Характеристики</h2>
    <p class="free-point">Свободные характеристики: {{ freePoint }}</p>
    <PointItem v-for="item in items" :key="items[item]" :item="item" />
    <v-btn style="margin-top: 50px" @click="readyChar">Готов к бою</v-btn>
  </div>
</template>
<script>
import PointItem from './PointItem.vue';

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
.character-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

