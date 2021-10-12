<template>
  <div class="window-opponent">
    <h2>{{ opponent.name }}</h2>
    <p class="discription-item">Урон: {{ opponent.statistics.damage }}ед</p>
    <p class="discription-item">Броня: {{ armorOpponent }}ед</p>
    <p class="discription-item">
      Множитель критического урона: х{{ opponent.statistics.criticalHitDamage }}
    </p>
    <p class="discription-item">
      Шанс критического урона: {{ opponent.statistics.criticalHitChance }}%
    </p>
    <p class="discription-item">Здоровье: {{ healPointOpponent }}ед</p>
    <p class="discription-item">Выносливость: {{ staminaOpponent }}ед</p>
  </div>
</template>
<script>
import opponents from '../../data/opponent';

export default {
  data() {
    return {
      opponents,
    };
  },
  computed: {
    opponent() {
      return this.opponents[this.$store.state.battleNumber - 1].character;
    },
    armorOpponent() {
      return this.opponent.statistics.armor.toFixed(1);
    },
    healPointOpponent() {
      return this.opponent.statistics.healPoint.toFixed(1);
    },
    staminaOpponent() {
      return this.opponent.statistics.stamina.toFixed(1);
    },
  },
};
</script>
<style scoped>
.window-opponent {
  padding: 20px;
  font-size: 18px;
  margin: 10px;
  width: 400px;
  height: 400px;
  margin: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
</style>
