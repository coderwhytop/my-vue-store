import { simpleNanoid } from "@/utils/help"

export function fetchList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = []
      for (let i = 0; i < 16; i++) {
        list.push({
          id: simpleNanoid(), // 需要id, 因为input都需要
          title: "大班桌" + i,
          icon: require("@/assets/images/borrow/prod.png"),
          checked: false,
          cate: "办公家具类",
          date: "2019-10-09",
          storeNum: 1
        })
      }
      console.log(list, "list")
      resolve(list)
    }, 1000)
  })
}
