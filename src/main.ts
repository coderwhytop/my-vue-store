import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "@/assets/css/flex.css"
import { createPinia } from "pinia"

// 导入组件库
import ElementUI from "element-plus" // Changed from 'element-ui'
// 导入组件相关样式
import "element-plus/dist/index.css" // Changed path

const app = createApp(App)

// 配置 Vue 插件
app.use(ElementUI, {
  size: "small"
})
const pinia = createPinia()
app.use(router)
app.use(pinia)

app.mount("#app")
