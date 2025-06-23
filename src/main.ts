import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/public.css'
import store from './store'

// 导入组件库
import ElementUI from 'element-plus'  // Changed from 'element-ui'
// 导入组件相关样式
import 'element-plus/dist/index.css'  // Changed path

const app = createApp(App)

// 配置 Vue 插件
app.use(ElementUI, {
  size: "small"
})

app.use(router)
app.use(store)

app.mount('#app')