<template>
  <v-btn :id="item.id" :class="itemClass" @click="selectedItem(item)">
    <v-img height="100" width="100" :src="src" />
  </v-btn>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
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
    selectedItem(newitem) {
      this.$store.commit('changeSelectedItem', newitem);
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
