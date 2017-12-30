import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import header from '../components/header/header';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

Vue.use(Router);
Vue.use(VueResource);
const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
export default router;
router.push('/goods');
