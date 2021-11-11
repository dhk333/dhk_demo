<template>
  <div class="home-container">
    <van-nav-bar title="头条" fixed />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <Article v-for="(item, index) in article" :key="index" :title="item.title" :autname="item.aut_name" :commCount="item.comm_count" :pubdate="item.pubdate" :cover="item.cover"></Article>
    </van-list>
  </div>
</template>

<script>
import Article from '@/components/article/article.vue'
import { getArticleListAPI } from '@/api/articleAPI.js'

export default {
  naem: 'Home',

  data() {
    return {
      // 页码值
      page: 1,
      // 请求的数据数量
      limit: 10,
      // 文章数组
      article: [],
      // 当数据全部加载完毕，应该改为true
      finished: false,
      loading: true
    }
  },
  components: {
    Article
  },
  methods: {
    // 请求文章数组
    async getArticleData() {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 数组拼接 [...旧数组，...新数组]
      this.article = [...this.article, ...res]
      this.loading = false

      if (res.length === 0) {
        // 当数组长度等于0时，代表已经没有新数据。finished改为true
        this.finished = true
      }
    },
    onLoad() {
      // 页码加1
      this.page++
      // 获取数据
      this.getArticleData()
    }
  },
  // 生命周期函数
  created() {
    this.getArticleData()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  /deep/.van-nav-bar__content {
    background-color: rgb(55, 121, 243);
  }
  /deep/.van-nav-bar__title {
    color: white;
  }
}
</style>
