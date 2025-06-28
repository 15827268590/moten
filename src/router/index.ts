import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/DataSourceView",
    },
    {
      path: "/app/dataSource",
      name: "dataSource",
      component: defineAsyncComponent(
        () => import("../views/DataSourceView.vue")
      ),
    },
    {
      path: "/app/layout",
      name: "layout",
      component: defineAsyncComponent(() => import("../views/ActionView.vue")),
    },
    {
      path: "/app/actions",
      name: "actions",
      component: defineAsyncComponent(() => import("../views/LayoutView.vue")),
    },
  ],
});

export default router;
