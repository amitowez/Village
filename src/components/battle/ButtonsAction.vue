<template>
  <div class="window-action">
    <ActionBtn v-for="perk in perks" v-show="checkReady" :key="perk.id" :perk="perk" />
    <v-btn v-show="checkReady" class="btn-action">Попытка сбежать</v-btn>
  </div>
</template>
<script>
import perks from '../../data/playerPerk';
import ActionBtn from './ActionBtn.vue';

export default {
  components: { ActionBtn },
  data() {
    return {
      perks,
    };
  },
  computed: {
    checkReady() {
      if (this.$store.state.readyToBatlle.inventory && this.$store.state.readyToBatlle.character) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style >
.window-action {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 97%;
  min-height: 100px;
  max-height: 200px;
  margin: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
</style>
