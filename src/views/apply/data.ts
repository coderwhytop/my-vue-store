// src/views/apply/data.ts
import { simpleNanoid } from "@/utils/help"
import type { IApplyItem, ApplyList } from "@/types/apply"
import Img from '@/assets/images/borrow/prod.png'

export function fetchList(): Promise<ApplyList> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list: ApplyList = []
      for (let i = 0; i < 16; i++) {
        list.push({
          id: simpleNanoid(),
          title: `大班桌${i}`,
          icon: Img,
          checked: false,
          cate: "办公家具类",
          date: "2019-10-09",
          storeNum: 1
        })
      }
      resolve(list)
    }, 1000)
  })
}
