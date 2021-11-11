import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
// 将vant设置为vue的插件
Vue.use(Vant)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
