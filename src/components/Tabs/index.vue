<template>
  <div class="justify-between align-center container">
    <div class="title">杭州公务仓一件事平台</div>
    <div class="tabs flex">
      <div
        v-for="item in tabs"
        class="tab-item"
        :key="item.name"
        @click="onClick(item)"
      >
        <div :style="{ color: active === item.name ? '#409EFF' : '' }">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router"

const routes = router
  .getRoutes()
  .map((item) => {
    return {
      name: item.path,
      label: item.meta?.title
    }
  })
  .filter((item) => item.name !== "/")
const tabs = routes.slice(0, routes.length - 2)
export default {
  data() {
    return {
      tabs,
      active: tabs[0].name
    }
  },
  watch: {
    $route: {
      handler(route) {
        const item = this.tabs.filter((item) => item.name === route.path)[0]
        this.active = item?.name || tabs[0].name
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {},
  methods: {
    onClick(item) {
      if (this.active !== item.name) {
        this.active = item.name
        this.$emit("change", item)
        this.$router.push(item.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    font-weight: 600;
    font-size: 22px;
    color: #80bfff;
  }
  .tabs {
    .tab-item {
      color: #777;
      font-size: 20px;
      font-weight: 600;
      display: inline-block;
      padding: 0px 20px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
}
</style>
