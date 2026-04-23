import HomeView from "@/View/HomeView.vue";

import { createRouter, createWebHistory } from "vue-router";
const rs = [{
    path: "/",
    name: "home",
    component: HomeView
  },
  { 
    path: "/about",
    name: "about",
    component: () => import("@/View/AboutView.vue"),
    children: [{
        path:'AboutCompany',
        name:'aboutCompany',
        component: () => import("@/View/about/AboutCompany.vue")
    },{
        path:'AboutUs',
        name:'aboutus',
        component: () => import("@/View/about/AboutUs.vue")
    },{
      path:'NewsList',
      name:'newslist',
      component: () => import("@/View/about/NewsList.vue")

    },{
      path:'detail',  // 修改为相对路径
      name:'NewsDetail',
      component: () => import("@/View/about/NewsDetail.vue")  // 修改为正确的组件路径
    },{
      path:'/detail/:id/:title',  // 修改为相对路径
      name:'NewsDetail',
      component: () => import("@/View/about/NewsDetail.vue")  // 修改为正确的组件路径 
    }]
}];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rs
});
export default router;