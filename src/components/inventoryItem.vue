<template>
  <v-btn :id="item.id" :class="itemClass" @click="selectedItem(item)">
    <v-img height="100" width="100" :src="src" />
  </v-btn>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
/* eslint-disable global-require */
import { InventoryItem } from '@/data/allInventory';

export default Vue.extend({
  computed: {
    src() {
      // FIXME: WTF with types?
      const { img } = this.item ?? '';
      // eslint-disable-next-line import/no-dynamic-require
      return `${require(`@/images/${img}`)}`;
    },
    itemClass() {
      const { type } = this.item;
      if (this.$store.state.equipment[type].id === this.item.id) {
        return 'itemActive';
      }
      return 'item';
    },
  },
  methods: {
    selectedItem(newitem: unknown) {
      this.$store.commit('changeSelectedItem', newitem);
    },
  },
  props: {
    item: {
      type: Object as PropType<InventoryItem>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.item {
  margin: 10px;
  width: 104px;
  min-height: 104px;
}

.itemActive {
  margin: 10px;
  width: 104px;
  min-height: 104px;
  border: 4px solid blue;
}
</style>
