import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path" // 需要安装 @types/node

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // 设置 @ 指向 src 目录
    }
  },
  base: './',
  server: {
    host: "0.0.0.0"
  }
})
