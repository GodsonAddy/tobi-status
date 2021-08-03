import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Status from "../views/Status.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/resolved",
    name: "Home",
    component: Home,
  },
  {
    path: "/inProgress",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pending",
    name: "Staus",
    component: Status,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
