import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/views/LandingPageView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutPageView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactPageView.vue"),
    },
    ,
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/GalleryPageView.vue"),
    },
  ],
});

export default router;
