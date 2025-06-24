import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/apply/All"
  },
  {
    path: "/apply/All",
    component: () => import("@/views/apply/All.vue"),
    meta: {
      title: "全部数据"
    }
  },
  {
    path: "/apply/Checked",
    component: () => import("@/views/apply/Checked.vue"),
    meta: {
      title: "勾选的"
    }
  },
  {
    path: "/notFound",
    component: () => import("@/views/error/notFound.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notFound"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
