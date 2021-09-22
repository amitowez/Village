<template>
  <div>
    <router-view />
    <p>В работе</p>
    <Player />
    <Opponent />
  </div>
</template>
<script>
import Player from '@/components/battlePlayer.vue';
import Opponent from '@/components/battleOpponent.vue';

export default {
  components: {
    Player,
    Opponent,
  },
};
</script>
<style scoped>

</style>
