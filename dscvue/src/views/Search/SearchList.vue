<!--  -->
<template>
  <div class="CategoryList">
    <Serach :toggle="toggle" @changeStyle="parChangeStyle" />
    <ul class="CategoryList-title">
      <li @click="tabs" data-index="0">
        <span> 综合</span>
        <i
          class="iconfont icon-iconfontjiantou"
          v-if="flagZonghe % 2 ? false : true"
        ></i>
        <i class="iconfont icon-jiantou" v-else></i>
      </li>
      <li @click="tabs" data-index="1">新品</li>
      <li @click="tabs" data-index="2">销量</li>
      <li @click="tabs" data-index="3">
        <span>价格</span>
        <i
          class="iconfont icon-iconfontjiantou"
          v-if="flagPrice % 2 ? false : true"
        ></i>
        <i class="iconfont icon-jiantou" v-else></i>
      </li>
      <li @click="showMask = !showMask">
        <i class="iconfont icon-daishouhuo1"></i>
        <span>筛选</span>
      </li>
    </ul>
    <ul class="dataList1" :class="{ dataList2: styleFlag }">
      <li
        class="info"
        v-for="categoryList in categoryLists"
        :key="categoryList.goods_id"
      >
        <router-link :to="'/detail/' + categoryList.goods_id">
          <img :src="categoryList.goods_img" alt="" />
          <div class="preInfo">
            <div class="price">
              <h3>{{ categoryList.goods_name }}</h3>
              <em>￥</em
              ><strong>{{
                categoryList.shop_price_formated.slice(1, 5)
              }}</strong
              ><em>00</em>
            </div>
            <div class="more">
              <em>进店</em>
              <span>{{ categoryList.sales_volume }}人已购买</span>
              <i class="iconfont icon-gouwuche1"></i>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <transition name="sy">
      <div class="mask" v-if="showMask">
        <div class="products">
          <h2>自营产品</h2>
        </div>
        <div class="promotion">
          <p>仅看有货</p>
          <p>促销</p>
        </div>
        <div class="priceRange">
          <h2>价格区间</h2>
          <div>
            <input type="number" placeholder="最低价" v-model="params.min" />
            <input type="number" placeholder="最高价" v-model="params.max" />
          </div>
        </div>
        <div class="brand">
          <h2>品牌</h2>
          <i class="iconfont icon-jiantou1"></i>
        </div>
        <div class="button">
          <button class="off" @click="showMask = false">关闭</button>
          <button class="confirm" @click="okFn">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Serach from "../../components/Search";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Serach,
  },
  data() {
    //这里存放数据
    return {
      styleFlag: false,
      toggle: true,
      obj: {},
      params: {
        cat_id: 1131,
        warehouse_id: 0,
        area_id: 0,
        min: "",
        max: "",
        goods_num: 0,
        size: 10,
        page: 1,
        sort: "goods_id",
        order: "desc",
        self: 0,
        keywords: "",
      },
      url: "/catalog/goodslist",
      type: "post",
      showMask: false,
      flagZonghe: 0,
      flagPrice: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {
    categoryLists() {
      return this.$store.state.categoryList;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    parChangeStyle(data) {
      this.styleFlag = data;
    },
    okFn() {
      this.showMask = false;
      this.$store.dispatch("actChangCategoryList", this.obj);
    },
    tabs(el) {
      this.min = "";
      this.max = "";
      this.sort = "";
      this.order = "";
      let oLiIndex = el.currentTarget.getAttribute("data-index");
      if (oLiIndex == 0) {
        this.flagZonghe++;
        this.flagPrice = 0;
        if (this.flagZonghe % 2) {
          this.params.order = "asc";
        } else {
          this.params.order = "desc";
        }
        this.params.sort = "goods_id";
      } else if (oLiIndex == 1) {
        this.flagZonghe = 0;
        this.flagPrice = 0;
        this.params.sort = "last_update";
      } else if (oLiIndex == 2) {
        this.flagZonghe = 0;
        this.flagPrice = 0;
        this.params.sort = "sales_volume";
      } else if (oLiIndex == 3) {
        this.flagPrice++;
        this.flagZonghe = 0;
        if (this.flagPrice % 2) {
          this.params.order = "asc";
        } else {
          this.params.order = "desc";
        }
        this.params.sort = "shop_price";
      }
      this.$store.dispatch("actChangCategoryList", this.obj);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.state.setKeyWords = this.$route.query.keywords;
    this.params.keywords = this.$route.query.keywords;
    this.params.cat_id = this.$route.params.id;
    this.obj = {
      url: this.url,
      params: this.params,
      type: this.type,
    };
    this.$store.dispatch("actChangCategoryList", this.obj);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    this.$store.state.setKeyWords = "";
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
body,
html {
  background-color: #efefef;
  .CategoryList {
    .CategoryList-title {
      margin-top: 4.4rem;
      background-color: #fff;
      display: flex;
      border-bottom: 1px solid #efefef;
      li {
        width: 20%;
        text-align: center;
        line-height: 4rem;
      }
    }
    .dataList1 {
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      .info {
        width: 46%;
        padding: 1rem;
        margin-left: 3%;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 1rem;
        margin-bottom: 1rem;
        img {
          width: 100%;
        }
        h3 {
          color: #333;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          color: red;
          padding: 0.5rem 0;
          strong {
            font-size: 1.4rem;
          }
          em {
            font-style: normal;
          }
        }
        .more {
          em {
            font-style: normal;
            padding: 0.3rem 0.5rem;
            border-radius: 0.2rem;
            background-color: rgb(253, 229, 229);
            color: red;
            margin-right: 0.5rem;
          }
          span {
            color: #666;
          }
          i {
            float: right;
            color: red;
          }
        }
      }
    }
    .dataList2 {
      padding: 1rem;
      display: flex;
      .info {
        width: 100%;
        a {
          width: 100%;
          display: flex;
          img {
            width: 30%;
          }
          .preInfo {
            padding: 0.5rem;

            .price {
              h3 {
                line-height: 2rem;
              }
            }
          }
        }
      }
    }
    .mask {
      position: fixed;
      top: 0;
      bottom: 0;
      font-size: 1.6rem;
      font-weight: normal;
      overflow: hidden;
      font-size: 1.6rem;
      color: #333;
      text-overflow: ellipsis;
      background-color: #f6f6f6;
      h2 {
        font-weight: normal;
      }
      div {
        background-color: #fff;
      }
      .products {
        padding: 1rem 1rem;
      }
      .promotion {
        margin: 2rem 0;
        padding: 1rem 0;
        display: flex;
        background-color: #fff;
        p {
          padding: 0.5rem;
          background-color: #f7f7f7;
          margin: 0 1rem;
        }
      }
    }
    .priceRange {
      padding-bottom: 1rem;
      h2 {
        border-bottom: 1px solid #ccc;
        padding: 1rem;
      }
      div {
        display: flex;
        padding-top: 1rem;
        input {
          width: 40.5%;
          padding: 1rem;
          background-color: #f7f7f7;
          text-align: center;
          margin-left: 1rem;
        }
      }
    }
    .brand {
      padding: 0 1rem;
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      height: 3rem;
      line-height: 3rem;
      i {
        font-size: 2.6rem;
      }
    }
    .button {
      position: absolute;
      width: 100%;
      bottom: 0;
      button {
        width: 50%;
        padding: 2rem;
        font-size: 1.6rem;
      }
      .off {
        border: 1px solid #c7c5c5;
      }
      .confirm {
        background-color: red;
        color: white;
      }
    }
  }
}

.sy-enter,
.sy-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.sy-enter-active,
.sy-leave-active {
  transition: all 0.5s linear;
}
</style>