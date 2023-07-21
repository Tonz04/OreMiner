import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HelloWorld
  },
  {
    path: "/about",
    component: About
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