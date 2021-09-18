<template>
  <div class="character-container">
    <router-view />
    <CharacterPoint />
    <CharacterPerks />
    <CharacterStats />
  </div>
</template>
<script>
import CharacterPoint from '@/components/characterPoint.vue';
import CharacterPerks from '@/components/characterPerks.vue';
import CharacterStats from '@/components/characterStats.vue';

export default {
  components: {
    CharacterPoint,
    CharacterPerks,
    CharacterStats,
  },
};
</script>
<style >
.character-container {
  display: flex;
}
.character-block {
  min-width: 450px;
  min-height: 500px;
  margin: 40px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
</style>
