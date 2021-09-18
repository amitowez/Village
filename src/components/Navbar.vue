<template>
  <v-container fluid>
    <v-app-bar color="accent-4" dark>
      <v-spacer />
      <!-- <v-btn outlined class="ml-3"><router-link class="nav" to="/action">Карта</router-link></v-btn> -->
      <v-btn outlined v-show="checkReadyChar" class="ml-3"
        ><router-link class="nav" to="/character">Персонаж </router-link></v-btn
      >
      <v-btn outlined v-show="checkReadyInv" class="ml-3"
        ><router-link class="nav" to="/inventory">Инвентарь </router-link></v-btn
      >
      <v-btn outlined v-show="battleShow" class="ml-3"
        ><router-link class="nav" to="/battle">Бой </router-link></v-btn
      >
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      ready: this.$store.state.readyToBatlle,
    };
  },
  computed: {
    battleShow() {
      if (this.ready.inventory === true && this.ready.character === true) {
        return true;
      }
      return false;
    },
    checkReadyInv() {
      if (this.$store.state.readyToBatlle.inventory) {
        return false;
      }
      return true;
    },
    checkReadyChar() {
      if (this.$store.state.readyToBatlle.character) {
        return false;
      }
      return true;
    },
  },
};
</script>
<style scoped>
.nav {
  text-decoration: none;
  color: white;
}
</style>
