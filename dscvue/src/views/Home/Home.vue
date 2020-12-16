<!--  -->
<template>
  <div class="home-page">
    <HomeHeader ref="header" />
    <div class="navbar" ref="nav">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeTab"
      >
      </ly-tab>
      <div class="category-btn">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
      <div class="bg" v-if="selectedId != 0"></div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入Footer组件
import Footer from "@/components/Footer.vue";
// 引入首页头部
import HomeHeader from "./components/HomeHeader";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      routerDatas: [
        "/home/index",
        "/home/household",
        "/home/clothing",
        "/home/shoebag",
        "/home/mobilephones",
        "/home/computer",
        "/home/hometextiles",
        "/home/personalmakeup",
      ],
    };
  },
  methods: {
    changeTab(item, index) {
      this.$router.push(this.routerDatas[index]);
    },
    scrollNav() {
      let nav = this.$refs.nav;
      let header = this.$refs.header.$el;
      // console.log(nav);
      // console.log(header);
      // console.log(window.pageYOffset);
      let pageTop = window.pageYOffset;
      if (pageTop >= 50) {
        header.style.background = "red";
        nav.style.background = "red";
        nav.style.position = "fixed";
      }else{
         header.style.background = "transparent";
        nav.style.background = "transparent";
        nav.style.position = "static";
      }
    },
  },
  mounted() {
    this.routerDatas.forEach((item, index) => {
      if (this.$route.path == item) {
        this.selectedId = index;
      }
    });
    window.addEventListener("scroll", this.scrollNav);
  },
  //监听属性 类似于data概念
  destroyed() {
    // window.removeEventListener("scroll", this.scrollNav);
  },
};
</script>
<style lang="less">
.home-page {
  .navbar {
    margin-top: 4.4rem;
    background: transparent;
    display: flex;
    z-index: 99;
    transition: all .3s linear;
    .ly-tab {
      z-index: 9;
      width: 85%;
      .ly-tabbar {
        background-color: transparent;
        border-bottom: 0px solid #eee;
        box-shadow: 0 0px 6px 1px rgba(0, 0, 0, 0);
        .ly-tab-list {
          height: 4.4rem;
          a {
            color: #fff;
          }
        }
      }
    }
    .bg {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 8.8rem;
      background: red;
      z-index: -1;
    }
    .category-btn {
      width: 15%;
      height: 4.4rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      i {
        font-size: 2rem;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>