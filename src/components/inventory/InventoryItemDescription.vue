<template>
  <div class="item-description">
    <img height="250" width="250" :src="itemSrc" />
    <div class="title">
      {{ selectedItem.title }}
    </div>
    <div class="title">
      {{ selectedItemTextParams.type }}
    </div>
    <div class="title">
      {{ selectedItemTextParams.price }}
    </div>
    <div v-if="selectedItem.type">
      <v-btn v-show="!isSelectedItemEquiped" @click="takeOnClothe"> Одеть </v-btn>
      <v-btn v-show="isSelectedItemEquiped" @click="takeOffClothe"> Снять </v-btn>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedItem']),
    ...mapGetters(['selectedItemTextParams', 'isSelectedItemEquiped']),
    itemSrc() {
      const img = this.selectedItem.img ?? 'фон.jpg';
      return `${require(`@/images/${img}`)}`;
    },
  },
  methods: {
    takeOnClothe() {
      const newEquip = {
        type: this.selectedItem.type,
        equipped: true,
        id: this.selectedItem.id,
      };
      const { value, type } = this.selectedItem;
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
  width: 270px;
  height: 400px;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
.title {
  padding: 5px;
}
</style>
