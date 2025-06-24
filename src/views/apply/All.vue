<template>
  <div>
    <List v-if="!loading" :list="list" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "@/views/apply/components/List.vue"
import { ref } from "vue"
import { fetchList } from "@/_mock/apply.mock"
import type { IApplyList } from "@/types/apply.type"
import { useApplyStore } from "@/store/apply.store"

const list = ref<IApplyList>([])
const loading = ref(false)
const applyStore = useApplyStore()

const getList = async () => {
  loading.value = true
  try {
    list.value = await fetchList()
    // 初始化时从store加载勾选状态
    applyStore.checkedItems.forEach((storeItem) => {
      const item = list.value.find((i) => i.id === storeItem.id)
      if (item) {
        item.checked = true
      }
    })
  } finally {
    loading.value = false
  }
}

getList()
</script>
