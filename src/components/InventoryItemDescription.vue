<template>
  <div class="item-description">
    <img height="250" width="250" :src="itemSrc" />
    <div class="title">
      {{ itemTitle }}
    </div>
    <div class="title">
      {{ itemValue }}
    </div>
    <div class="title">
      {{ itemPrice }}
    </div>
    <v-btn v-show="isBtnOnShow" @click="takeOnClothe"> Одеть </v-btn>
    <v-btn v-show="isBtnOffShow" @click="takeOffClothe"> Снять </v-btn>
  </div>
</template>
<script lang="ts">
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['selectedItem']),
    itemTitle(): string {
      return this.selectedItem.title;
    },
    itemSrc() {
      const img = this.selectedItem.img ?? 'фон.jpg';
      // eslint-disable-next-line import/no-dynamic-require
      return `${require(`@/images/${img}`)}`;
    },
    itemPrice(): string {
      const { price } = this.selectedItem;
      if (!price) {
        return '';
      }
      return `Цена: ${price}`;
    },
    itemValue(): string {
      const { type, value } = this.selectedItem;
      if (!type) {
        return '';
      }
      if (type === 'weapon') {
        return `Урон: ${value}`;
      }
      return `Броня: ${value}`;
    },
    isBtnOnShow() {
      const { type } = this.selectedItem;
      const equip = Object.values<any>(this.$store.state.equipment).find(
        (value) => value.type === type
      );

      if (equip) {
        return !equip.equipped;
      }
      return '';
    },
    isBtnOffShow() {
      const { type } = this.selectedItem;
      const equip = Object.values<any>(this.$store.state.equipment).find(
        (value) => value.type === type
      );

      if (equip) {
        return equip.equipped;
      }
      return '';
    },
  },
  methods: {
    takeOnClothe() {
      const newEquip = {
        type: this.selectedItem.type,
        equipped: true,
        id: this.selectedItem.id,
      };
      const { value } = this.selectedItem;
      const { type } = this.selectedItem;
      this.$store.commit('changeCharStat', { value, type });
      this.$store.commit('changeEquip', newEquip);
    },
    takeOffClothe() {
      const newEquip = {
        type: this.selectedItem.type,
        equipped: false,
        id: null,
      };
      const value = -this.selectedItem.value;
      const { type } = this.selectedItem;
      this.$store.commit('changeCharStat', { value, type });
      this.$store.commit('changeEquip', newEquip);
    },
  },
};
</script>
<style lang="scss" scoped>
.item-description {
  width: 350px;
  height: 400px;
  padding: 15px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
.title {
  padding: 5px;
}
</style>
