<template>
  <div>
    <List v-if="!loading" :list="list" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "./components/List.vue"
import { useApplyStore } from "@/store/apply.store"
import { ref } from "vue"
import { IApplyList } from "@/types/apply.type"

const applyStore = useApplyStore()

const list = ref<IApplyList>(
  applyStore.checkedItems.filter((item) => item.checked) as IApplyList
)
console.log(list.value, "fff")
const loading = ref(false)
</script>
