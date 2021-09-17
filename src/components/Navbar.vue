<template>
  <v-container fluid>
    <v-app-bar color="accent-4" dark>
      <v-spacer />
      <v-btn outlined class="ml-3"><router-link class="nav" to="/action">Карта</router-link></v-btn>
      <v-btn outlined class="ml-3"
        ><router-link class="nav" to="/character">Персонаж </router-link></v-btn
      >
      <v-btn outlined class="ml-3"
        ><router-link class="nav" to="/inventory">Инвентарь </router-link></v-btn
      >
    </v-app-bar>
  </v-container>
</template>
<script></script>
<style scoped>
.nav {
  text-decoration: none;
  color: white;
}
</style>
