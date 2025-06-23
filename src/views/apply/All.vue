// src/views/apply/All.vue
<template>
  <div>
    <List v-if="!loading" :check-list="checkList" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "@/views/apply/components/List.vue"
import store from "@/store"
import { computed, ref } from "vue"
import { fetchList } from "@/views/apply/data"
import { useCreateContext } from "@/utils/hooks"
import type { ApplyList } from "@/types/apply"

const list = ref<ApplyList>([])
const loading = ref(false)
const checkList = computed(() => list.value.filter((item) => item.checked))

useCreateContext(list)

const getList = async () => {
  loading.value = true
  try {
    list.value = await fetchList()
    list.value.forEach((item) => (item.checked = false))
  } finally {
    loading.value = false
  }
}

getList()
</script>
