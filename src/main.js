import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "@/assets/css/public.css"
import store from "./store"

Vue.config.productionTip = false

// 导入组件库
import ElementUI from "element-ui"
// 导入组件相关样式
import "element-ui/lib/theme-chalk/index.css"
// 配置 Vue 插件
Vue.use(ElementUI, {
  size: "small"
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app")
