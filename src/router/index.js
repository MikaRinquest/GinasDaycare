import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/services",
    name: "services",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/ServicesView.vue"
      );
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/GalleryView.vue");
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/ContactView.vue");
    },
  },
  {
    path: "/vacancies",
    name: "vacancies",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/VacanciesView.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
