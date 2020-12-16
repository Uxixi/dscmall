<!--  -->
<template>
  <div class="">
    <ul class="list-warp" v-if="listIndex != 1">
      <li v-for="(list, index) in listdatas" :key="index">
        <router-link :to="'/detail/' + list.goods_id">
          <img :src="list.goods_thumb" alt="" />
          <div class="list-title">{{ list.title }}</div>
          <div class="list-price">{{ list.shop_price }}</div>
        </router-link>
      </li>
    </ul>
    <ul class="list-warp list-warp2" v-else>
      <li v-for="(list, index) in listdatas" :key="index">
        <img :src="list.img" alt="" />
        <div class="list-title">{{ list.goods_name }}</div>
        <div class="ulOne">
          <div class="ul-img">
            <img :src="list.user_picture" alt="" />
            <span>{{ list.user_name }}</span>
          </div>
          <div class="ul-right">
            <i class="iconfont icon-xianshi"></i>
            <span>{{ list.dis_browse_num }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    listdatas: Array,
    listIndex: Number,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  mounted() {
    console.log(this.listIndex);
  },
};
</script>
<style lang="less">
.list-warp {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: 45%;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    img {
      width: 100%;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    .list-title {
      margin: 0.5rem 1rem;
      text-align: left;
      font-size: 1.4rem;
      height: 4rem;
      line-height: 2rem;
      overflow: hidden;
      display: -webkit-flex;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .list-price {
      margin: 0.5rem 1rem;
      font-size: 1.8rem;
      color: red;
      text-align: left;
      &::before {
        content: "￥";
      }
    }
  }
}
.list-warp2 {
  li {
    img {
      width: 17.3rem;
      height: 20.7rem;
      border-bottom-right-radius: 0rem;
      border-bottom-left-radius: 0rem;
    }
    .ulOne {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem 0.5rem;
      .ul-img {
        display: flex;
        img {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          margin-right: 0.5rem;
          display: block;
        }
        span {
          display: block;
          height: 2.2rem;
          line-height: 2.2rem;
        }
      }
    }
  }
}
</style>