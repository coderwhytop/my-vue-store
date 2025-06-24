<template>
  <div>
    <List v-if="!loading" :list="list" />
    <div v-loading="loading" style="height: 300px" v-else></div>
  </div>
</template>

<script lang="ts" setup>
import List from "./components/List.vue"
import { ref } from "vue"

const list = ref([])
const loading = ref(false)

</script>
