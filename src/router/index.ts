import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Users from "@/views/Users.vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/admin/";
axios.defaults.withCredentials = true;

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { 
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "/users"
      },
      {
        path: "/users",
        component: Users,
      }
    ]
   },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
