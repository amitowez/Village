<template>
  <div class="window-log">
    <h2 class="log-discription">Бой№{{ battleNumber }}</h2>
    <p class="log-player">{{ playerLog }}</p>
    <p class="log-opponent">{{ opponentLog }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    playerLog() {
      return this.$store.state.playerRoundLog;
    },
    opponentLog() {
      return this.$store.state.opponentRoundLog;
    },
    battleNumber() {
      return this.$store.state.battleNumber;
    },
  },
};
</script>
<style scoped>
.window-log {
  padding: 20px;
  margin: 5px;
  width: 700px;
  height: 400px;
  margin: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
.log-discription {
  margin-left: 260px;
}
</style>
