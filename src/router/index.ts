import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

import Login from '../views/login/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Login",
    component: Login
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

// 路由拦截
index.beforeEach((to, from, next) => {
  // store.commit('changeActiveIndex', iconMap[to.path]);
  // store.commit('changeRule', to.path);
  // store.commit('delTip', iconMap[to.path])
  next();
})

export default index;