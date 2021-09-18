import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ActionMap from '../pages/ActionMap.vue';
import Character from '../pages/Сharacter.vue';
import Inventory from '../pages/Inventory.vue';
import Battle from '../pages/Battle.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/battle' },
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
  {
    path: '/battle',
    name: 'battle',
    component: Battle,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
