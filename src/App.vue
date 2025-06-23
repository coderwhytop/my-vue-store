<template>
  <div id="app">
    <Tabs></Tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs/index.vue"

export default {
  components: {
    Tabs
  },
  mounted() {
    window.vm = this
  }
}
</script>

<style>
#app {
  min-width: 960px;
  height: 100vh;
  overflow: hidden;
  padding: 0 20px;
}

* {
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
