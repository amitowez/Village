/* eslint-disable no-shadow */
import Vue from 'vue';
import { Store } from 'vuex';
import { State } from './store';

Object.defineProperty(Vue.prototype, '$stock', {
  get(): Store<State> {
    return this.$store;
  },
});

declare module 'vue/types/options' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> {
    stock?: Store<State>;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $stock: Store<State>;
  }
}
