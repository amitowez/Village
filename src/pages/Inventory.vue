<template>
  <div class="container">
    <router-view />
    <InventoryList :all-inventory="allInventory" />
    <div class="block">
      <InventoryItemDescription />
      <v-btn style="margin-top: 50px" @click="readyInv">Готов к бою</v-btn>
    </div>
  </div>
</template>
<script>
import allInventory from '@/data/allInventory';
import InventoryList from '@/components/InventoryList.vue';
import InventoryItemDescription from '@/components/InventoryItemDescription.vue';

export default {
  components: { InventoryList, InventoryItemDescription },
  data() {
    return {
      allInventory,
    };
  },
  computed: {},
  methods: {
    readyInv() {
      this.$store.commit('changeReady', 'inventory');
      console.log(this.$store.state.readyToBatlle);
      if (!this.$store.state.readyToBatlle.character) {
        this.$router.push('character');
      } else {
        this.$router.push('battle');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
.block {
  display: inline-block;
}
</style>
