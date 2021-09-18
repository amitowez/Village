import Vue from 'vue';
import VueRouter from 'vue-router';
import ActionMap from '../pages/ActionMap.vue';
import Battle from '../pages/Battle.vue';
import Inventory from '../pages/Inventory.vue';
import Character from '../pages/Сharacter.vue';

Vue.use(VueRouter);

const routes = [
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
