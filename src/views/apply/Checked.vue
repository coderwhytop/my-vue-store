<template>
  <div>
    <List v-if="!loading" :list="list" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "./components/List.vue"
import { useApplyStore } from "@/store/apply.myStore"
import { ref, watch } from "vue"
import { IApplyList } from "@/types/apply.type"

const applyStore = useApplyStore()

const list = ref<IApplyList>([])

watch(
  applyStore.checkedItems,
  (arr) => {
    list.value = arr.filter((item) => item.checked)
  },
  { immediate: true, deep: true }
)

const loading = ref(false)
</script>
