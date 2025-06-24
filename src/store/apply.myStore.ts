import { reactive, readonly, watchEffect } from 'vue'
import type { IApplyItem } from "@/types/apply.type"

const key = "checkedApplyItems"

interface IApplyState {
  checkedItems: IApplyItem[]
}

// 状态存储实现
function createStore() {
  // 1. 定义状态
  const state: IApplyState = reactive({
    checkedItems: JSON.parse(localStorage.getItem(key) || '[]')
  })

  // 2. 定义 actions
  const actions = {
    updateCheckedItems(item: IApplyItem) {
      if (!state.checkedItems) {
        state.checkedItems = []
      }
      const findIndex = state.checkedItems.findIndex((i) => i.id === item.id)
      findIndex > -1 && state.checkedItems.splice(findIndex, 1)
      item.checked && state.checkedItems.push(item)
    },
    loadFromLocalStorage() {
      const stored = localStorage.getItem(key)
      if (stored) {
        state.checkedItems = JSON.parse(stored)
      }
    }
  }

  // 3. 自动持久化到 localStorage
  watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(state.checkedItems))
  })

  return {
    state: readonly(state), // 只读状态防止直接修改
    ...actions
  }
}

// 创建单例 store
const applyStore = createStore()

// 导出 useStore 函数，模仿 Pinia 的使用方式
export function useApplyStore() {
  return applyStore
}
