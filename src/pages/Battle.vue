<template>
  <div>
    <router-view />
    <p>В работе</p>
    <Player />
    <Opponent />
  </div>
</template>
<script>
import Player from '@/components/BattlePlayer.vue';
import Opponent from '@/components/BattleOpponent.vue';

export default {
  components: {
    Player,
    Opponent,
  },
};
</script>
<style scoped>

</style>
