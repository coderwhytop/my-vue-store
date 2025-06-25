import { reactive } from "vue"

type IStore<T extends object, U extends object> = T & U
type IStoreFactory<T extends object, U extends object> = () => {
  state: T
  actions: U
}

// 状态存储实现
export default function createStore<T extends object, U extends object>(
  factory: IStoreFactory<T, U>
): () => IStore<T, U> {
  // 用闭包就没办法 实现一模一样的 效果了。
  const { state, actions } = factory()
  const reactiveState = reactive(state) as T
  return () => ({
    ...reactiveState,
    ...actions
  })
}
