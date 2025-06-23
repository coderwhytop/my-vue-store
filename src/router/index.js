import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/apply/All"
    },
    {
      path: "/apply/All",
      component: () => import("../views/apply/All.vue"),
      meta: {
        title: "全部"
      }
    },
    {
      path: "/apply/Checked",
      component: () => import("../views/apply/Checked.vue"),
      meta: {
        title: "勾选的"
      }
    },

    {
      path: "*",
      redirect: "/404"
    },
    {
      path: "/404",
      component: () => import("../views/404/index.vue")
    }
  ]
})

export default router
