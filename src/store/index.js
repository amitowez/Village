import Vue from 'vue';
import Vuex from 'vuex';
import { getSelectedItemTextParams } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    readyToBatlle: {
      inventory: false,
      character: false,
    },
    selectedItem: {},
    character: {
      statistics: {
        damage: 1,
        armor: 0,
        healPoint: 50,
        stamina: 20,
        evasion: 5,
        chanceHit: 0,
        criticalHitDamage: 2,
        criticalHitChance: 5,
        trainability: 0,
      },
      specPoint: 6,
      specifications: {
        power: {
          value: 1,
          dis: 'Сила',
          key: 'power',
        },
        agility: {
          value: 1,
          dis: 'Ловкость',
          key: 'agility',
        },
        intuition: {
          value: 1,
          dis: 'Интуиция',
          key: 'intuition',
        },
        intellect: {
          value: 1,
          dis: 'Интелект',
          key: 'intellect',
        },
      },
      perkPoint: 1,
      perks: {},
    },
    equipment: {
      weapon: {
        type: 'weapon',
        equipped: false,
        id: null,
      },
      helmet: {
        type: 'helmet',
        equipped: false,
        id: null,
      },
      armor: {
        type: 'armor',
        equipped: false,
        id: null,
      },
      hand: {
        type: 'hand',
        equipped: false,
        id: null,
      },
      shoes: {
        type: 'shoes',
        equipped: false,
        id: null,
      },
      legs: {
        type: 'legs',
        equipped: false,
        id: null,
      },
      shield: {
        type: 'shield',
        equipped: false,
        id: null,
      },
    },
  },
  mutations: {
    changeReady(state, key) {
      Vue.set(state.readyToBatlle, key, true);
    },
    changeSelectedItem(state, newSelected) {
      Vue.set(state, 'selectedItem', newSelected);
    },
    changeCharStat(state, { value, type }) {
      const newDamage = state.character.statistics.damage + value;
      const newArmor = state.character.statistics.armor + value;
      if (type === 'weapon') {
        Vue.set(state.character.statistics, 'damage', newDamage);
      } else {
        Vue.set(state.character.statistics, 'armor', newArmor);
      }
    },
    changeEquip(state, newEquip) {
      const { type, equipped } = state.selectedItem;
      Vue.set(state.equipment, type, newEquip);
      Vue.set(state.selectedItem, 'equipped', !equipped);
    },
    changePointValue(state, { newValue, newSpecPoint, key, base, additionally }) {
      if (key === 'power') {
        const newHealPoint = state.character.statistics.healPoint + base;
        const newStamina = state.character.statistics.stamina + base;
        const newCriticalHitDamage = state.character.statistics.criticalHitDamage + additionally;
        Vue.set(state.character.statistics, 'healPoint', newHealPoint);
        Vue.set(state.character.statistics, 'stamina', newStamina);
        Vue.set(state.character.statistics, 'criticalHitDamage', newCriticalHitDamage);
      }
      if (key === 'agility') {
        const newEvasion = state.character.statistics.evasion + additionally;
        const newChanceHit = state.character.statistics.chanceHit + additionally;
        Vue.set(state.character.statistics, 'evasion', newEvasion);
        Vue.set(state.character.statistics, 'chanceHit', newChanceHit);
      }
      if (key === 'intuition') {
        const newCriticalHitChance = state.character.statistics.criticalHitChance + additionally;
        const newChanceHit = state.character.statistics.chanceHit + additionally;
        Vue.set(state.character.statistics, 'criticalHitChance', newCriticalHitChance);
        Vue.set(state.character.statistics, 'chanceHit', newChanceHit);
      }
      if (key === 'intellect') {
        const newEvasion = state.character.statistics.evasion + additionally;
        const newCriticalHitChance = state.character.statistics.criticalHitChance + additionally;
        const newTrainability = state.character.statistics.trainability + base;
        Vue.set(state.character.statistics, 'evasion', newEvasion);
        Vue.set(state.character.statistics, 'criticalHitChance', newCriticalHitChance);
        Vue.set(state.character.statistics, 'trainability', newTrainability);
      }
      Vue.set(state.character, 'specPoint', newSpecPoint);
      Vue.set(state.character.specifications[key], 'value', newValue);
    },
  },
  actions: {},
  modules: {},
  getters: {
    isSelectedItemEquiped: ({ selectedItem, equipment }) =>
      Object.values(equipment).find((value) => value.type === selectedItem.type)?.equipped,
    selectedItemTextParams: ({ selectedItem }) => getSelectedItemTextParams(selectedItem),
  },
});
