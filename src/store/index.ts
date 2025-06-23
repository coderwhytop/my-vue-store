// store/counter.ts
import { defineStore } from 'pinia'

// Define types
interface CounterState {
  count: number
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++ // Direct mutation in actions (no separate mutations in Pinia)
    }
    // Async example:
    // async incrementAsync() {
    //   await someAsyncFunction()
    //   this.count++
    // }
  },
  getters: {
    doubleCount(): number {
      return this.count * 2
    }
  }
})