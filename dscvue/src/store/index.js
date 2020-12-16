import Vue from "vue"
  
import Vuex from "vuex"  //须下载cnpm install vuex --save
// 使用vuex
Vue.use(Vuex);
// 导入模块
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

// 实例化一个store
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;