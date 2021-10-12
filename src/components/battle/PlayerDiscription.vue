<template>
  <div class="window-player">
    <h2>Игрок</h2>
    <p class="discription-item">Урон: {{ param.damage }}ед</p>
    <p class="discription-item">Броня: {{ armor }}ед</p>
    <p class="discription-item">
      Множитель критического урона: х{{ param.criticalHitDamage.toFixed(1) }}
    </p>
    <p class="discription-item">
      Шанс критического урона: {{ param.criticalHitChance.toFixed(1) }}%
    </p>
    <p class="discription-item">Здоровье: {{ healPoint }}ед</p>
    <p class="discription-item">Выносливость: {{ stamina }}ед</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: this.$store.state.character.statistics,
    };
  },
  computed: {
    armor() {
      return this.param.armor.toFixed(1);
    },
    healPoint() {
      return this.param.healPoint.toFixed(1);
    },
    stamina() {
      return this.param.stamina.toFixed(1);
    },
  },
};
</script>
<style >
.window-player {
  padding: 20px;
  width: 400px;
  height: 400px;
  margin: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 33px 12px rgba(34, 60, 80, 0.2);
}
.discription-item {
  width: 400px;
  margin-top: 25px;
  height: 20px;
  font-size: 18px;
}
</style>
