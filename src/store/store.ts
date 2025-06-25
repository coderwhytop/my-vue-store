import { reactive } from "vue";

type IStore<T extends object, U extends object> = T & U;
type IStoreFactory<T extends object, U extends object> = () => {
  state: T;
  actions: U;
};

export default function createStore<T extends object, U extends object>(
  factory: IStoreFactory<T, U>
): () => IStore<T, U> {
  // 缓存 actions（它们通常不会变化）
  let cachedActions: U | null = null;

  return () => {
    // 每次调用都重新获取 state（保证最新）
    const { state } = factory();
    const reactiveState = reactive(state) as T;

    // 只初始化一次 actions
    if (!cachedActions) {
      cachedActions = factory().actions;
    }

    return {
      ...reactiveState,
      ...cachedActions,
    };
  };
}
