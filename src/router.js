import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Teams.vue';
import PlayerView from './views/Players.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Teams',
      component: Home,
    },
    {
      path: '/players',
      name: 'PlayerView',
      component: PlayerView,
    },
    {
      path: '*',
      component: Home,
    },
  ],
});
