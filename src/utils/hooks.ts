import { provide, inject } from "vue"

const key = "__test"

// provide 和 inject 只能在 setup 函数中 使用
// 另外， provide 注入的数据如果是异步的， inject 不支持监听的，而 props 支持，这就是它们的区别。
export function useCreateContext(instance) {
  provide(key, instance)
}

export function useContext() {
  return inject(key)
}
