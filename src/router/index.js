import Vue from "vue";
import VueRouter from "vue-router";
import Old from "../views/Old.vue";
import Home from "../views/Home.vue";
import Kaleidoscope from "../views/Kaleidoscope.vue";
import School from "../views/School.vue";
import Trains from "../views/Trains.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/old",
    name: "old",
    component: Old
  },
  {
    path: "/kaleidoscope",
    name: "kaleidoscope",
    component: Kaleidoscope
  },
  {
    path: "/school",
    name: "school",
    component: School
  },
  {
    path: "/trains",
    name: "trains",
    component: Trains
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
