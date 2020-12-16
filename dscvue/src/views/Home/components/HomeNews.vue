<!--  -->
<template>
  <div class="home-news">
    <div class="title-img">
      <img :src="titleimg" alt="" />
    </div>
    <ul ref="news">
      <li v-for="(news, index) in newsData" :key="index">{{ news.title }}</li>
    </ul>
    <div class="arr" ref="dd">
      <i class="iconfont icon-jiantou2"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      titleimg: require("@/assets/images/hot.png"),
      newsData: [
        { id: 1, title: "服务店突破2000多家" },
        { id: 2, title: "三大国际腕表品牌签约" },
        { id: 3, title: "我们成为中国最大家电零售B2B2C系统" },
      ],
      timer: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollNewsFn() {
      // console.log(this.$refs);
      // console.log(this.$refs.news);
      var oUl = this.$refs.news; //获取ul dom元素
      oUl.style.top = "-5rem";
      setTimeout(() => {
        this.newsData.push(this.newsData[0]);
        this.newsData.shift();
        oUl.style.top = "0rem";
      }, 500);
    },
  },
  mounted() {
    // this.scrollNewsFn();
    this.timer = setInterval(this.scrollNewsFn, 2000);
  },
  destroyed() {
    // 销毁组件
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.home-news {
  margin: 0 auto;
  height: 5rem;
  width: calc(95% - 30px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  overflow: hidden;
  position: relative;
  background: white;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding: 0 0.5rem;
  .title-img {
    width: 20%;
    height: 3rem;
    img {
      width: 100%;
    }
  }
  ul {
    width: 70%;
    height: 5rem;
    left: 20%;
    margin-left: 2rem;
    position: absolute;
    li {
      height: 5rem;
      font-size: 1.4rem;
      line-height: 5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .arr {
    width: 10%;
    text-align: right;
  }
}
</style>