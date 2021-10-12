<template>
  <div class="container">
    <router-view />
    <InventoryList :player-inventory="playerInventory" />
    <div class="block">
      <InventoryItemDescription />
      <v-btn style="margin-top: 50px" @click="readyInv">Готов к бою</v-btn>
    </div>
  </div>
</template>
<script>
import playerInventory from '@/data/playerInventory';
import InventoryList from '@/components/inventory/InventoryList.vue';
import InventoryItemDescription from '@/components/inventory/InventoryItemDescription.vue';

export default {
  components: { InventoryList, InventoryItemDescription },
  data() {
    return {
      playerInventory,
    };
  },
  computed: {},
  methods: {
    readyInv() {
      this.$store.commit('changeReady', 'inventory');
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
