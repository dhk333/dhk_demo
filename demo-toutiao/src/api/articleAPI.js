// 封装着请求文章数据模块
import request from '@/utils/request.js'

// 导出API函数(带参数)
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      // 请求参数
      _page,
      _limit
    }
  })
}
