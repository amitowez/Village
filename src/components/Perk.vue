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
        return `Урон: ${this.perk.value}`;
      }
      return '';
    },
    activChanceToHit() {
      if (this.active) {
        return `Шанс попадания: ${this.perk.chanceToHit}`;
      }
      return '';
    },
    activStaminaPrice() {
      if (this.active) {
        return `Затраты выносливости: ${this.perk.staminaPrice}`;
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
  height: 20px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  justify-content: center;
}
.perkActive {
  height: 75px;
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  justify-content: center;
}
</style>
