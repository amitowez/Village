<template>
  <div class="point-item">
    <p>{{ item.dis }}</p>
    <v-btn
      style="height: 30px; min-width: 30px; padding: 0px"
      @click="valueMinus"
      class="btn-change"
      >-</v-btn
    >
    <p>{{ itemValue }}</p>
    <v-btn style="height: 30px; min-width: 30px; padding: 0px" @click="valuePlus" class="btn-change"
      >+</v-btn
    >
  </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    valuePlus() {
      const newValue = this.item.value + 1;
      const newSpecPoint = this.$store.state.character.specPoint - 1;
      const base = 2.5;
      const additionally = 0.1;
      if (this.$store.state.character.specPoint >= 1) {
        this.$store.commit('changePointValue', {
          newValue,
          newSpecPoint,
          key: this.item.key,
          base,
          additionally,
        });
        console.log(this.item, this.item.value);
      }
    },
    valueMinus() {
      const newValue = this.item.value - 1;
      const newSpecPoint = this.$store.state.character.specPoint + 1;
      const base = -2.5;
      const additionally = -0.1;
      if (this.item.value > 1) {
        this.$store.commit('changePointValue', {
          newValue,
          newSpecPoint,
          key: this.item.key,
          base,
          additionally,
        });
      }
    },
  },
  computed: {
    itemValue() {
      return this.item.value;
    },
  },
};
</script>
<style >
.point-item {
  margin: 30px;
  min-width: 80px;
  height: 30px;
  display: flex;
  font-size: 20px;
  justify-content: center;
}
.btn-change {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
