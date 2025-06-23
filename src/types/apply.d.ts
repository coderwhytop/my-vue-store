// types/apply.d.ts
declare interface IApplyItem {
  id: string
  title: string
  icon: string
  checked: boolean
  cate: string
  date: string
  storeNum: number
}

declare type ApplyList = IApplyItem[]
