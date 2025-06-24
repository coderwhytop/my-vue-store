<template>
  <div>
    <div class="top">
      <img class="icon" :src="data.icon" />
      <div class="title">{{ data.title }}</div>
      <input v-model="data.checked" type="checkbox" class="checkboxs" />
    </div>
    <div class="bottom">
      <div class="row">
        <span class="label">资产分类：</span>
        <span class="value">{{ data.id }}</span>
      </div>
      <!--      <div class="row">-->
      <!--        <span class="label">购置时间：</span>-->
      <!--        <span class="value">{{ item.date }}</span>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IApplyItem } from "@/types/apply.type"

defineProps<{
  data: IApplyItem
}>()
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  position: relative;
  .checkboxs {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
  }
  .icon {
    width: 100%;
    height: 100%;
  }
  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    color: #f5f5f5;
    font-weight: 400;
    line-height: 30px;
    text-indent: 15px;
    background: #7f7f7f;
  }
}
.bottom {
  .row {
    margin-top: 10px;
    .label {
      font-weight: 400;
    }
    .value {
      font-weight: 600;
      color: #333;
    }
  }
}
</style>
