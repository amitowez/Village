import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ActionMap from '../pages/ActionMap.vue';
import Character from '../pages/Сharacter.vue';
import Inventory from '../pages/Inventory.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/action' },
  {
    path: '/action',
    name: 'action',
    component: ActionMap,
  },
  {
    path: '/character',
    name: 'character',
    component: Character,
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: Inventory,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
