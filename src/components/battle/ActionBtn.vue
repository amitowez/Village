<template>
  <v-btn class="btn-action" @click="round">{{ perk.name }}</v-btn>
</template>
<script>
import opponents from '@/data/opponent';
import allPerks from '@/data/allperks';

export default {
  props: ['perk'],
  data() {
    return {
      playerStats: this.$store.state.character.statistics,
      opponents,
      opponent: opponents[this.$store.state.battleNumber - 1].character.statistics,
      opponentPerksStok: opponents[this.$store.state.battleNumber - 1].character.perks,
      allPerks,
    };
  },

  methods: {
    round() {
      /// /////////////////////// Калькулятор игрока
      if (this.playerStats.stamina >= this.perk.staminaPrice) {
        let playerRoundLog = 'Игрок, ';
        let opponentRoundLog = `${
          this.opponents[this.$store.state.battleNumber - 1].character.name
        }, `;

        if (this.perk.name !== 'Отдых') {
          /// ////// Изменения выносливости
          const valueStamina = this.playerStats.stamina - this.perk.staminaPrice;
          const keyStamina = 'stamina';
          this.$store.commit('battleChangeParam', { key: keyStamina, value: valueStamina });
          /// /////////////////////////Шанс попадания
          const randomChance = Math.random() * (100 - 1);
          const chance = this.perk.chanceToHit + this.playerStats.chanceHit - this.opponent.evasion;
          const armorEffect = (`0.${this.opponent.armor}` - 0) * this.playerStats.damage;
          if (randomChance <= chance) {
            const randomChanceCrit = Math.random() * (100 - 1);
            if (randomChanceCrit <= this.playerStats.criticalHitChance) {
              this.opponent.healPoint -=
                (this.playerStats.damage + this.perk.value - armorEffect) *
                this.playerStats.criticalHitDamage;
              playerRoundLog += `${this.perk.critSuccessLog}${(
                (this.playerStats.damage + this.perk.value - armorEffect) *
                this.playerStats.criticalHitDamage
              ).toFixed(1)}ед урона`;
            } else {
              this.opponent.healPoint -= this.playerStats.damage + this.perk.value - armorEffect;
              playerRoundLog += `${this.perk.successLog}${(
                this.playerStats.damage +
                this.perk.value -
                armorEffect
              ).toFixed(1)}ед урона`;
            }
          } else {
            playerRoundLog += this.perk.missingLog;
          }
        } else {
          const valueStamina = this.$store.state.character.statistics.stamina + 5;
          const keyStamina = 'stamina';
          this.$store.commit('battleChangeParam', { key: keyStamina, value: valueStamina });
          playerRoundLog += this.perk.successLog;
        }
        /// ///////////////////////// Ход опонента
        /// ///////////////Выявлениe перков
        const opponentPerks = this.opponentPerksStok.reduce((previousValue, id) => {
          const perk = this.allPerks.find(({ perkId }) => id === perkId);
          if (perk) {
            return [...previousValue, perk];
          }
          return previousValue;
        }, []);
        /// ///////////////////////Выбор перка от условий
        let readyPerk;
        if (this.opponent.stamina >= 20 && opponentPerks.find((perk) => perk.staminaPrice === 20)) {
          readyPerk = opponentPerks.find((perk) => perk.staminaPrice === 20);
        } else if (
          this.opponent.stamina >= 10 &&
          opponentPerks.find((perk) => perk.staminaPrice === 10)
        ) {
          readyPerk = opponentPerks.find((perk) => perk.staminaPrice === 10);
        } else if (
          this.opponent.stamina >= 10 &&
          opponentPerks.find((perk) => perk.staminaPrice === 10 && this.playerStats.healPoint >= 10)
        ) {
          readyPerk = opponentPerks.find((perk) => perk.chanceToHit <= 80);
        } else if (this.opponent.stamina < 10 && this.opponent.stamina >= 1) {
          readyPerk = opponentPerks.find((perk) => perk.staminaPrice === 1);
        } else {
          readyPerk = opponentPerks.find((perk) => perk.name === 'Отдых');
        }
        /// //////////////////////// Калькулятор урона
        const chanceToHitOpponent =
          readyPerk.chanceToHit + this.opponent.chanceHit - this.playerStats.evasion;
        const randomChanceOpponent = Math.random() * (100 - 1);
        const keyHealPoint = 'healPoint';
        let valueHealPoint = this.playerStats.healPoint;
        const armorEffectOpponent = (`0.${this.playerStats.armor}` - 0) * this.opponent.damage;
        if (readyPerk.name !== 'Отдых') {
          if (randomChanceOpponent <= chanceToHitOpponent) {
            const randomChanceCritOpponent = Math.random() * (100 - 1);
            if (randomChanceCritOpponent <= this.opponent.criticalHitChance) {
              valueHealPoint =
                this.playerStats.healPoint -
                (readyPerk.value + this.opponent.damage - armorEffectOpponent) *
                  this.opponent.criticalHitDamage;
              this.$store.commit('battleChangeParam', { key: keyHealPoint, value: valueHealPoint });
              opponentRoundLog += `${readyPerk.successLog}${(
                (readyPerk.value + this.opponent.damage - armorEffectOpponent) *
                this.opponent.criticalHitDamage
              ).toFixed(1)}ед урона`;
            } else {
              valueHealPoint =
                this.playerStats.healPoint -
                (readyPerk.value + this.opponent.damage - armorEffectOpponent);
              this.$store.commit('battleChangeParam', { key: keyHealPoint, value: valueHealPoint });
              opponentRoundLog += `${readyPerk.successLog}${(
                readyPerk.value +
                this.opponent.damage -
                armorEffectOpponent
              ).toFixed(1)}ед урона`;
            }
            this.opponent.stamina -= readyPerk.staminaPrice;
          } else {
            opponentRoundLog += readyPerk.missingLog;
            this.opponent.stamina -= readyPerk.staminaPrice;
          }
        } else {
          this.opponent.stamina += readyPerk.value;
          opponentRoundLog += readyPerk.successLog;
        }
        this.$store.commit('changeLog', { key: 'playerRoundLog', value: playerRoundLog });
        this.$store.commit('changeLog', { key: 'opponentRoundLog', value: opponentRoundLog });
      } else {
        alert('Недостаточно выносливости');
      }

      if (this.opponent.healPoint <= 0) {
        const additionalExperience =
          (`0.${this.playerStats.trainability}` - 0) * this.opponent.experienceReward;
        const keyExperience = 'experience';
        const valueExperience =
          this.playerStats.experience + this.opponent.experienceReward + additionalExperience;
        alert(`Победа! Опыт ${this.opponent.experienceReward} + ${additionalExperience}`);
        this.$store.commit('battleChangeParam', { key: keyExperience, value: valueExperience });
        this.$router.push('character');
        this.$store.commit('changeReady', 'inventory');
        this.$store.commit('changeReady', 'character');
        const { maxHealPoint } = this.playerStats;
        this.$store.commit('battleChangeParam', { key: 'healPoint', value: maxHealPoint });
        const { maxStamina } = this.playerStats;
        this.$store.commit('battleChangeParam', { key: 'stamina', value: maxStamina });
        const newNumber = this.$store.state.battleNumber + 1;
        this.$store.commit('battleChangeNumber', newNumber);
        console.log(this.$store.state.battleNumber);
      } else if (this.playerStats.healPoint <= 0) {
        alert('Поражение');
        this.$router.push('character');
        window.location.reload();
      }
    },
  },
};
</script>
<style >
.btn-action {
  min-width: 150px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
