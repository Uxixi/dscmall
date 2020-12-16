<!-- 搜索页面 -->
<template>
  <div class="Search">
    <Search />
    <div class="recent-search">
      <div class="title">
        <h2>最近搜索</h2>
        <i class="iconfont icon-shanchu1" @click="delSearchList"></i>
      </div>
      <ul>
        <li v-for="(list, index) in searchList" :key="index">
          <router-link :to="'/searchlist?keywords=' + list">{{
            list
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent-search recent-search2">
      <div class="title">
        <h2>热门搜索</h2>
      </div>
      <ul>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Search from "@/components/Search";
import Footer from "@/components/Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Search,
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    searchList() {
      return this.$store.state.searchList;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    delSearchList() {
      this.$store.commit("delSearchList");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.Search {
  .recent-search {
    background: #fff;
    margin-top: 4.4rem;
    padding: 2rem;
    .title {
      display: flex;
      padding-bottom: 2rem;
      h2 {
        width: 90%;
        text-align: left;
      }
      i {
        width: 10%;
        font-size: 2rem;
        text-align: right;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        background-color: #f0f2f5;
        padding: 0.35rem 1rem;
        margin: 0.5rem;
        border-radius: 5px;
      }
    }
  }
  .recent-search2 {
    margin-top: 0;
  }
}
</style>