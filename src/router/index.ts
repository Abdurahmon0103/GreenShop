import { createRouter, createWebHistory } from "vue-router";

const lazyLoad = (componentPath: string): (() => Promise<any>) => {
  return () => import(`../components/${componentPath}.vue`);
};

const product = (componentPath: string): (() => Promise<any>) => {
  return () => import(`../components/products/${componentPath}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "!text-green-600 border-b-3 pb-2 border-green-600",
  routes: [
    { path: "/", redirect: "/Dashboard" },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: lazyLoad("Dashboard"),
    },
    {
      path: "/shop",
      name: "shop",
      component: lazyLoad("Cards"),
      children: [
        { path: "Card", name: "Card", component: product("Card") },
        { path: "Card1", name: "Card1", component: product("Card1") },
        { path: "Card2", name: "Card2", component: product("Card2") },
        { path: "Card3", name: "Card3", component: product("Card3") },
        { path: "Card4", name: "Card4", component: product("Card4") },
        { path: "Card5", name: "Card5", component: product("Card5") },
        { path: "Card6", name: "Card6", component: product("Card6") },
        { path: "Card7", name: "Card7", component: product("Card7") },
        { path: "Card8", name: "Card8", component: product("Card8") },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
