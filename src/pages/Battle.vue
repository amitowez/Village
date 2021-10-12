<template>
  <div>
    <div style="display: flex">
      <router-view />
      <PlayerDiscription />
      <Log />
      <Opponent />
    </div>
    <ButtonsAction />
  </div>
</template>
<script>
import PlayerDiscription from '@/components/battle/PlayerDiscription.vue';
import Opponent from '@/components/battle/OpponentDiscription.vue';
import Log from '@/components/battle/BattleLog.vue';
import ButtonsAction from '@/components/battle/ButtonsAction.vue';

export default {
  components: {
    Opponent,
    Log,
    ButtonsAction,
    PlayerDiscription,
  },
};
</script>
<style scoped>

</style>
