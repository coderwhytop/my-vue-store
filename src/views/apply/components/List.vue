<template>
  <div>
    <div class="list wrapper flex-wrap">
      <Item
        @click.native="() => onCheck(item)"
        class="item pointer"
        :data="item"
        v-for="item in list"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Item from "@/views/apply/components/Item.vue"
import type { IApplyList, IApplyItem } from "@/types/apply.type"
import { useApplyStore } from "@/store/apply.store"

interface IProps {
  list: IApplyList
}

 defineProps<IProps>()
const applyStore = useApplyStore()

function onCheck(item: IApplyItem) {
  item.checked = !item.checked
  applyStore.updateCheckedItems(item)
}

// 加载本地存储的数据
applyStore.loadFromLocalStorage()
</script>

<style lang="scss" scoped>
.list {
  background: #ffffff;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

// 固定定位
.fixed-bottom {
  border-top: 1px solid #eee;
  z-index: 999999; // 盖过 drawer层
  position: absolute;
  background: #ffffff;
  padding: 0 30px;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  .content {
    position: relative;
    margin-right: 5px;
    .icon-wrapper {
      padding: 4px 8px;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
    .radius {
      box-sizing: border-box;
      border-radius: 50%;
      width: 14px;
      font-weight: 400;
      height: 14px;
      font-size: 10px;
      position: absolute;
      right: 0;
      top: 0;
      background: #409eff;
      color: #fff;
    }
  }
}

// drawer
.drawer-list {
  padding-bottom: 80px;
  .item {
    padding: 0 20px 14px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border-bottom: none;
    }
    .left {
      margin-right: 14px;
      .icon {
        width: 80px;
        height: 80px;
      }
    }
    .right {
      .top,
      .bottom {
        .label {
          color: #999;
        }
        .value {
          color: #333;
        }
      }
      .top {
        margin-bottom: 15px;
      }
    }
  }
}

.list {
  .item {
    width: 200px;
    height: 340px;
    margin-right: 50px;
  }
}
</style>
