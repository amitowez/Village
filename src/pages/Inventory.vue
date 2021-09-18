<template>
  <div class="container">
    <router-view />
    <InventoryList :all-inventory="allInventory" />
    <div class="block">
      <InventoryItemDescription />
      <v-btn @click="readyInv" style="margin-top: 50px">Готов к бою</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import allInventory from '@/data/allInventory';
import InventoryList from '@/components/InventoryList.vue';
import InventoryItemDescription from '@/components/InventoryItemDescription.vue';

export default {
  data() {
    return {
      allInventory,
    };
  },
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
  computed: {},
  components: { InventoryList, InventoryItemDescription },
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
