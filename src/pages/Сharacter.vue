<template>
  <div class="character-container">
    <router-view />
    <CharacterPoint />
    <CharacterPerks />
    <CharacterStats />
  </div>
</template>
<script lang="ts">
import characterPoint from '@/components/characterPoint.vue';
import characterPerks from '@/components/characterPerks.vue';
import characterStats from '@/components/characterStats.vue';

export default {
  components: {
    characterPoint,
    characterPerks,
    characterStats,
  },
};
</script>
<style >
.character-container {
  display: flex;
}
.character-block {
  min-width: 400px;
  min-height: 500px;
  border: 1px solid black;
}
</style>
