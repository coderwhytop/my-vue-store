import type { IApplyItem } from "@/types/apply.type"
import createStore from "@/store/store"

interface IState {
  checkedItems: IApplyItem[]
}

interface IActions {
  updateCheckedItems: (item: IApplyItem) => void
  loadFromLocalStorage: () => void
}

export const useApplyStore = createStore<IState, IActions>(() => {
  const STORAGE_KEY = "checkedApplyItems"

  const state: IState = {
    checkedItems: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  }

  const actions: IActions = {
    updateCheckedItems(item: IApplyItem) {
      if (!state.checkedItems) state.checkedItems = []
      const findIndex = state.checkedItems.findIndex(
        (i) => i.id === item.id
      )
      findIndex > -1 && state.checkedItems.splice(findIndex, 1)
      item.checked && state.checkedItems.push(item)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.checkedItems))
    },
    loadFromLocalStorage() {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) state.checkedItems = JSON.parse(stored)
    }
  }

  return {
    state,
    actions
  }
})
