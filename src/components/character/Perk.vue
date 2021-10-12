<template>
  <div :class="activCreate" @click="activity">
    <p>{{ perk.name }}</p>
    <p>{{ activValue }}</p>
    <p>{{ activChanceToHit }}</p>
    <p>{{ activStaminaPrice }}</p>
  </div>
</template>
<script>
export default {
  props: ['perk'],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    activCreate() {
      if (this.active) {
        return 'perkActive';
      }
      return 'perk';
    },
    activValue() {
      if (this.active) {
        if (this.perk.name !== 'Отдых') {
          return `Урон: ${this.perk.value}ед`;
        }
        return `Выносливость: +${this.perk.value}ед`;
      }
      return '';
    },
    activChanceToHit() {
      if (this.active) {
        if (this.perk.name !== 'Отдых') {
          return `Шанс попадания: ${this.perk.chanceToHit}%`;
        }
        return '';
      }
      return '';
    },
    activStaminaPrice() {
      if (this.active) {
        if (this.perk.name !== 'Отдых') {
          return `Затраты выносливости: ${this.perk.staminaPrice}ед`;
        }
        return '';
      }
      return '';
    },
  },
  methods: {
    activity() {
      this.active = !this.active;
    },
  },
};
</script>
<style scoped>
.perk {
  height: 40px;
  padding: 6px;
  margin: 10px;
  width: 300px;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  justify-content: center;
  font-size: 20px;
  transition: 300ms;
  -webkit-box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
  -moz-box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
}
.perkActive {
  height: 100px;
  padding: 6px;
  margin: 10px;
  width: 300px;

  border-radius: 10px;
  cursor: pointer;
  display: block;
  justify-content: center;
  font-size: 20px;
  -webkit-box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
  -moz-box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
  box-shadow: 0px 0px 20px -4px rgba(34, 60, 80, 0.27);
  transition: 300ms;
}
</style>
