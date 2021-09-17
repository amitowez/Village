import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedItem: {},
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
    changeSelectedItem(state, newSelected) {
      Vue.set(state, 'selectedItem', newSelected);
    },
    changeEquip(state, newEquip) {
      const { type, equipped } = state.selectedItem;
      Vue.set(state.equipment, type, newEquip);
      Vue.set(state.selectedItem, 'equipped', !equipped);
    },
  },
  actions: {},
  modules: {},
});
