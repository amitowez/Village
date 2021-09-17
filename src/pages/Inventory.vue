<template>
  <div class="container">
    <router-view />
    <InventoryList :all-inventory="allInventory" />
    <InventoryItemDescription />
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
  components: { InventoryList, InventoryItemDescription },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
