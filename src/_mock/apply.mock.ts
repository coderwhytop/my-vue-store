// src/views/apply/data.ts
import type { IApplyList } from "@/types/apply.type"
import Img from '@/assets/images/borrow/prod.png'

export function fetchList(): Promise<IApplyList> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list: IApplyList = []
      for (let i = 0; i < 10; i++) {
        list.push({
          id: `${i}`,
          title: `大班桌${i}`,
          icon: Img,
          checked: false,
        })
      }
      resolve(list)
    }, 1000)
  })
}
