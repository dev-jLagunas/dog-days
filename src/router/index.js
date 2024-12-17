import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/views/LandingPageView.vue"),
      meta: { title: "The Dog Days - Home" },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutPageView.vue"),
      meta: { title: "About - The Dog Days" },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactPageView.vue"),
      meta: { title: "Contact - The Dog Days" },
    },
    ,
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/GalleryPageView.vue"),
      meta: { title: "Gallery - The Dog Days" },
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
});

export default router;
