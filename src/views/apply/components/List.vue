<template>
  <div>
    <div class="list wrapper flex-wrap">
      <Item
        @click.native="item.checked = !item.checked"
        class="item pointer"
        :item="item"
        v-for="item in list"
      />
    </div>

    <div class="fixed-bottom justify-end">
      <div class="align-center">
        <div class="content">
          <div class="icon-wrapper pointer" @click="drawer = true">
            <img
              class="icon"
              :src="require('@/assets/images/borrow/cart.png')"
            />
          </div>
          <div class="radius flex-center" v-if="checkList.length">
            {{ checkList.length > 99 ? "99" : checkList.length }}
          </div>
        </div>
      </div>
    </div>

    <el-drawer title="已勾选物资" :visible.sync="drawer" direction="rtl">
      <div class="drawer-list">
        <div v-for="item in checkList" class="align-center item">
          <div class="left">
            <img class="icon" :src="item.icon" />
          </div>
          <div class="right">
            <div class="top">
              <span class="label">库存数量：</span>
              <span class="value">{{ item.storeNum }}件</span>
            </div>
            <div class="bottom">
              <span class="label">库存数量：</span>
              <el-input-number
                v-model="item.storeNum"
                controls-position="right"
                :min="1"
                :max="3"
              ></el-input-number>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import Item from "@/views/apply/components/Item.vue"
import { useContext } from "@/utils/hooks"

interface IProps {
  // checkList:
}

const $props = defineProps({
  checkList: {
    type: Array,
    required: true
  }
})
const list = useContext()
const checkList = computed(() => $props.checkList)
const drawer = ref(false)
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
