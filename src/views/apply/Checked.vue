<template>
  <div>
    <List v-if="!loading" :check-list="checkList" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "./components/List.vue"
import { computed, ref } from "vue"
import { fetchList } from "@/views/apply/data"
import { useCreateContext } from "@/utils/hooks"
import type { ApplyList } from "@/types/apply"

const list = ref([])
const loading = ref(false)
const checkList = computed<ApplyList>(() => list.value.filter((item) => item.checked))
useCreateContext(list)

const getList = async function () {
  loading.value = true
  list.value = await fetchList().finally(() => {
    loading.value = false
  })
  list.value.map((item) => (item.checked = false))
}

getList()
</script>
