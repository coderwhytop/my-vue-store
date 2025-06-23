<template>
  <div>
    <List v-if="!loading" :check-list="checkList" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script setup>
import List from "./components/List.vue"
import store from "@/store"
import { computed, ref } from "vue"
import { fetchList } from "@/views/apply/data"
import { useCreateContext } from "@/utils/hooks"

const list = ref([])
const loading = ref(false)
const checkList = computed(() => list.value.filter(item => item.checked))

useCreateContext(list)
const getList = async function() {
  loading.value = true
  list.value = await fetchList().finally(() => {
    loading.value = false
  })

  list.value.map(item => (item.checked = false))
}
getList()
console.log(store, "store")
store.commit("INCREMENT")
console.log(store.state.count)
</script>
