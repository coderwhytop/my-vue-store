// types/apply.d.ts
export interface IApplyItem {
  id: `${number}`
  title: string
  icon: string
  checked: boolean
}

export type IApplyList = IApplyItem[]
