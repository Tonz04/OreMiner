import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Main from './pages/Main.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
})

export default router;