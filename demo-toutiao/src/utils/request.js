import axios from 'axios'

// 调用axios.create() 函数，指定request接收
const request = axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.escook.cn'
})
// 导出模块
export default request
