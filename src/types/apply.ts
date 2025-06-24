// types/apply.d.ts
export interface IApplyItem {
  id: string
  title: string
  icon: string
  checked: boolean
  cate: string
  date: string
  storeNum: number
}

export type ApplyList = IApplyItem[]
