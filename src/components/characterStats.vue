<template>
  <div class="character-block">
    <h2 style="padding-left: 30px">Статистика</h2>
    <div class="stat-dis">
      <p>Урон</p>
      <p style="padding-left: 30px">{{ renderDamage }}</p>
    </div>
    <div class="stat-dis">
      <p>Броня</p>
      <p style="padding-left: 30px">{{ renderArmor }}</p>
    </div>
    <div class="stat-dis">
      <p>Здоровье</p>
      <p style="padding-left: 30px">{{ renderHealPoint }}</p>
    </div>
    <div class="stat-dis">
      <p>Выносливость</p>
      <p style="padding-left: 30px">{{ renderStamina }}</p>
    </div>
    <div class="stat-dis">
      <p>Уклонение</p>
      <p style="padding-left: 30px">{{ renderEvasion }}</p>
    </div>
    <div class="stat-dis">
      <p>Шанс попадания</p>
      <p style="padding-left: 30px">{{ renderChanceHit }}</p>
    </div>
    <div class="stat-dis">
      <p>Критический урон</p>
      <p style="padding-left: 30px">{{ renderCriticalHitDamage }}</p>
    </div>
    <div class="stat-dis">
      <p>Шанс критического урона</p>
      <p style="padding-left: 30px">{{ renderCriticalHitChance }}</p>
    </div>
    <div class="stat-dis">
      <p>Обучаемость</p>
      <p style="padding-left: 30px">{{ renderTrainability }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stat: this.$store.state.character.statistics,
    };
  },
  computed: {
    renderDamage() {
      return `${this.stat.damage.toFixed(1)}ед`;
    },
    renderArmor() {
      return `${this.stat.armor.toFixed(1)}ед`;
    },
    renderHealPoint() {
      return `${this.stat.healPoint.toFixed(1)}ед`;
    },
    renderStamina() {
      return `${this.stat.stamina.toFixed(1)}ед`;
    },
    renderEvasion() {
      return `${this.stat.evasion.toFixed(1)}%`;
    },
    renderChanceHit() {
      return `${this.stat.chanceHit.toFixed(1)}%`;
    },
    renderCriticalHitDamage() {
      return `x${this.stat.criticalHitDamage.toFixed(1)}`;
    },
    renderCriticalHitChance() {
      return `${this.stat.criticalHitChance.toFixed(1)}%`;
    },
    renderTrainability() {
      return `+${this.stat.trainability.toFixed(1)}%`;
    },
  },
};
</script>
<style scoped>
.stat-dis {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
