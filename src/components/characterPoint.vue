<template>
  <div class="character-block">
    <h2 style="padding-left: 30px">Характеристики</h2>
    <p class="free-point">Свободные характеристики: {{ freePoint }}</p>
    <PointItem v-for="item in items" :key="items[item]" :item="item" />
  </div>
</template>
<script>
import PointItem from './pointItem.vue';

export default {
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
  components: { PointItem },
};
</script>
<style scoped>
.free-point {
  margin: 30px;
  font-size: 20px;
}
</style>

