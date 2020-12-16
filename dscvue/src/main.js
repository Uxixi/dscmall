import Vue from "vue";
import App from "./App.vue"
Vue.config.productionTip = false

// 先下载npm install --save mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
// 下载 cnpm install ly-tab --save
import Lytab from 'ly-tab'
Vue.use(Lytab)

// 导入路由模块
import router from "./router/router.js";

// 引入状态管理store模块 
import store from "./store/index.js"

new Vue({
  router,
  store, //挂载store
  render: h => h(App),
}).$mount('#app')
