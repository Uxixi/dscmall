<!--  -->
<template>
  <div class="indexTop" v-infinite-scroll="loadMore">
    <Loading v-if="isShowLoading" />
    <div class="kong" :style="bg"></div>
    <div class="indexSwiper">
      <Swiper @bcolor="Bcolor" />
    </div>
    <Classify />
    <HomeNews />
    <HomeCountDown />
    <Homekaixue />
    <HomeGroup />
    <HomeTeide />
    <HomeFashion />
    <HomeShop/>

    <div>
      <ul class="tabs">
        <li
          v-for="(tabsData, index) in tabsDatas"
          :key="index"
          @click="changeTab(index, tabsData.url, tabsData.type)"
        >
          <h3>{{ tabsData.title }}</h3>
          <h6 :class="{ active: activeIndex == index }">{{ tabsData.tips }}</h6>
        </li>
      </ul>
      <List :listdatas="listdatas" :listIndex="activeIndex" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Swiper from "@/components/Swiper";
import Classify from "../components/index-Classify";
import HomeNews from "../components/HomeNews";
import Homekaixue from "../components/Home-kaixue";
import HomeGroup from "../components/HomeGroup";
import List from "@/components/List";
import HomeCountDown from "../components/HomeCountDown";
import HomeTeide from "../components/HomTeide";
import HomeFashion from "../components/HomeFashion";
import Loading from "@/components/Loading";
import HomeShop from "../components/HomeShop"
import { getHomeList } from "@/api/api";
// console.log(getHomeList);
// 需要下载 cnpm install axios --save
// import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    Classify,
    HomeNews,
    Homekaixue,
    HomeGroup,
    List,
    HomeCountDown,
    HomeTeide,
    HomeFashion,
    Loading,
    HomeShop,
  },
  data() {
    //这里存放数据
    return {
      colorArr: ["red", "#E43124", "#4091ff", "#028379", "#3c81ff"],
      bg: {
        background: "",
      },
      listdatas: [],
      page: 1,
      size: 10,
      type: "is_best",
      url: "/goods/type_list",
      isShowLoading: false,
      activeIndex: 0,
      tabsDatas: [
        {
          id: 1,
          title: "精选",
          tips: "为你推荐",
          type: "is_best",
          url: "/goods/type_list",
        },
        {
          id: 2,
          title: "社区",
          tips: "新奇好物",
          type: "",
          url: "/discover/find_list",
        },
        {
          id: 3,
          title: "新品",
          tips: "潮流上新",
          type: "is_new",
          url: "/goods/type_list",
        },
        {
          id: 4,
          title: "热卖",
          tips: "火热爆款",
          type: "is_hot",
          url: "/goods/type_list",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    Bcolor(data) {
      // console.log(data); //data是子组件广播出来的数据
      this.bg.background = this.colorArr[data];
    },
    async getBestDatas(url, page, size, type) {
      this.isShowLoading = true;
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      // console.log();
      console.log(result.data);
      if (result.data) {
        let resultArr = result.data;
        this.listdatas = this.listdatas.concat(resultArr);
        this.isShowLoading = false;
      } else if (result.data == "undefined") {
        alert("网络出现故障");
      }
    },
    changeTab(index, url, type) {
      this.page = 1;
      this.listdatas = [];
      this.activeIndex = index;
      console.log(this.activeIndex);
      this.url = url;
      this.type = type;

      this.getBestDatas(this.url, this.page, this.size, this.type);
    },
    loadMore() {
      this.page++;
      this.getBestDatas(this.url, this.page, this.size, this.type);
    },
  },
  mounted() {
    this.getBestDatas(this.url, this.page, this.size, this.type);
    // window.addEventListener("scroll", ()=> {
    //     console.log(document.documentElement.scrollTop);
    //   },
    //   false
    // );
  },
};
</script>
<style lang="less">
.indexTop {
  position: relative;
  top: -9rem;
  left: 0;
  .kong {
    background: red;
    height: 14.8rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    transition: all 0.5s;
    z-index: -1;
  }
  .indexSwiper {
    // height: 4rem;
    position: relative;
    top: -5rem;
    z-index: 20;
  }
  .tabs {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: 0px solid #efefef;
      }
      h3 {
        font-size: 1.4rem;
        color: #666;
        margin-bottom: 3px;
      }
      h6 {
        font-size: 1.2rem;
        color: #999;
        font-weight: normal;
      }
      .active {
        color: #fff;
        background: red;
        border-radius: 2rem;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
</style>