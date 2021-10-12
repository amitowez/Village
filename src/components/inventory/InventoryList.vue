<template>
  <div class="list">
    <InventoryItem v-for="item in playerInventory" :key="item.id" :item="item" />
  </div>
</template>

<script>
import InventoryItem from './InventoryItem.vue';

export default {
  components: { InventoryItem },
  props: ['playerInventory'],
};
</script>
<style lang="scss" scoped>
</style>
