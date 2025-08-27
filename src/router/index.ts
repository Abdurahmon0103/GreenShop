import { createRouter, createWebHistory } from "vue-router";
const lazyLoad = (componentPath: string): (() => Promise<any>) => {
  return () => import(`../components/${componentPath}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/Dashboard" },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: lazyLoad("Dashboard"),
    },
  ],
});
export default router;
