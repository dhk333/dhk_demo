<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item, index) in cover.images" :key="index" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ autname }}&nbsp;&nbsp; {{ commCount }}评论 &nbsp;&nbsp; 发布日期 {{ pubdate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: 'Article',
  props: {
    // 文章标题
    title: {
      type: String,
      default: ''
    },
    // 作者名字
    autname: {
      type: String,
      default: ''
    },
    // 评论数量
    commCount: {
      // 为评论类型定义多种可能
      type: [String, Number],
      default: ''
    },
    // 发布日期
    pubdate: {
      type: String,
      default: ''
    },
    // 图片
    cover: {
      // 对象类型
      type: Object,
      default: function () {
        return { type: 0 }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
