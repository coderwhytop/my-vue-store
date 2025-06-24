import { defineStore } from 'pinia'
import type {  IApplyItem } from "@/types/apply.type"

interface IApplyState {
  checkedItems: IApplyItem[]
}

const key = 'checkedApplyItems'
export const useApplyStore = defineStore('apply', {
  state: function (): IApplyState {
   const data = localStorage.getItem(key) || JSON.stringify([]) as string
    return {
     checkedItems: JSON.parse(data)
    }
  },
  actions: {
    getCheckItems() {
      return this.checkedItems
    },
    // 更新勾选列表
    updateCheckedItems(item: IApplyItem) {
      console.log('到这了 set')
      if(!this.checkedItems) {
        this.checkedItems = []
      }
      item && this.checkedItems.push(item)
      // 同时保存到 localStorage
      localStorage.setItem(key, JSON.stringify(this.checkedItems))
    },
    // 从 localStorage 加载
    loadFromLocalStorage() {
      console.log('到这了 get')
      const stored = localStorage.getItem(key)
      if (stored) {
        this.checkedItems = JSON.parse(stored)
      }
    }
  }
})
