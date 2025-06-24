<template>
  <div>
    <List v-if="!loading" :check-list="checkList" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "@/views/apply/components/List.vue"
import { computed, ref } from "vue"
import { fetchList } from "@/views/apply/data"
import { useCreateContext } from "@/utils/hooks"
import type { ApplyList } from "@/types/apply"
import { useApplyStore } from '@/store/apply'

const list = ref<ApplyList>([])
const loading = ref(false)
const applyStore = useApplyStore()

const checkList = computed<ApplyList>(() => list.value.filter((item) => item.checked))

useCreateContext(list)

const getList = async () => {
  loading.value = true
  try {
    list.value = await fetchList()
    // 初始化时从store加载勾选状态
    applyStore.checkedItems.forEach(storeItem => {
      const item = list.value.find(i => i.id === storeItem.id)
      if (item) {
        item.checked = true
        item.storeNum = storeItem.storeNum
      }
    })
    console.log(applyStore.getCheckItems(), list.value,'fff')
  } finally {
    loading.value = false
  }
}

getList()
</script>
