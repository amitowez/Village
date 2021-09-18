import Vue from 'vue';
import Vuex from 'vuex';
import { InventoryItem } from '@/data/allInventory';

Vue.use(Vuex);

type TEquipmentType = 'weapon' | 'helmet' | 'armor' | 'hand' | 'shoes' | 'legs' | 'shield';
type TEquipmentItem = {
  type: TEquipmentType;
  equipped: boolean;
  id: number | null;
};
export type State = {
  selectedItem: InventoryItem | Record<string, never>;
  equipment: Record<TEquipmentType, TEquipmentItem>;
};

export default new Vuex.Store<State>({
  state: {
    selectedItem: {},
    character: {
      specPoint: 6,
      specifications: {
        power: 1,
        agility: 1,
        intuition: 1,
        intellect: 1,
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
