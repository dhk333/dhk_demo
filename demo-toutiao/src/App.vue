<template>
  <div class="app-container">
    <!-- 内容区域 -->
    <router-view></router-view>
    <!-- 导航栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" socped></style>
