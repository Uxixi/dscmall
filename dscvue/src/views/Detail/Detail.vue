<!--  -->
<template>
  <div class="Detail-page">
    <!-- 头部 -->
    <div
      class="detail-title"
      :style="'background: rgba(255, 255, 255,' + bgOpacity + ')'"
      ref="header"
    >
      <div class="i" :style="'color:' + colorI">
        <i
          class="iconfont icon-jiantou3"
          onclick="window.history.back()"
          :style="'background: rgba(41, 47, 54,' + bgOpacityI + ')'"
        ></i>
      </div>
      <div class="title-tabs" v-show="bgFlag">
        <span
          :class="navActive == index ? 'active' : ''"
          v-for="(list, index) in navList"
          :key="index"
          @click="changeNavTabs(index)"
          >{{ list }}</span
        >
      </div>
      <div class="i" :style="'color:' + colorI">
        <i
          class="iconfont icon-fenxiang_2"
          @click="showShare"
          :style="'background: rgba(41, 47, 54,' + bgOpacityI + ')'"
        ></i>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="detail-swiper" id="title0">
      <mt-swipe :auto="2000">
        <mt-swipe-item
          v-for="detailData in detailDatas.gallery_list"
          :key="detailData.img_id"
        >
          <img :src="detailData.img_url" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 商品详情 -->
    <div class="detail-goods-info" id="title1">
      <div class="detail-goods-price">
        <strong class="newprice">￥{{ detailDatas.cost_price }}</strong>
        <span class="oldprice">￥{{ detailDatas.market_price }}</span>
      </div>
      <div class="detail-vip">
        <img src="https://x.dscmall.cn/static/dist/img/icon-vip.png" alt="" />
        <span>高级VIP享超值优惠价</span>
        <span>￥{{ detailDatas.cost_price }}</span>
        <div class="detail-register">
          <span>立即开通</span>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </div>
      <div class="detail-goodsName">{{ detailDatas.goods_style_name }}</div>
      <div class="detail-number">
        <div>累计销量{{ detailDatas.sales_volume }}</div>
        <div>库存{{ detailDatas.goods_number }}</div>
        <div>{{ detailInfoDatas.city_name }}</div>
      </div>
    </div>
    <div class="detail-serve">
      <div><span>赠送积分：</span>{{ detailDatas.give_integral }}积分</div>
      <div><span>服务：</span>七天无理由退款</div>
    </div>
    <!-- 送至 -->
    <div class="detail-address">
      <div class="" @click="popupVisible2 = true">
        <span>送至：{{ sheng }}-{{ shi }}-{{ qu }}</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
      <div><span>运费：</span>￥{{ detailDatas.dis_commission }}</div>
    </div>
    <!--地址  -->
    <mt-popup v-model="popupVisible2" position="bottom" class="address">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
    <!--已选 -->
    <div class="detail-selected">
      <div class="yixuan" @click="popupVisible = true">
        <span>已选：</span> {{ buyNum }}个
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <!-- 遮罩加入购物出现 -->
    <mt-popup class="detail-mask" v-model="popupVisible" position="bottom">
      <div class="detail-goods-info">
        <div class="detail-goods-img">
          <img :src="detailDatas.goods_thumb" alt="" />
        </div>
        <div class="detail-goods-title">
          <div class="goods-con">
            {{ detailDatas.goods_style_name }}
          </div>
          <div class="goods-price">
            {{ detailDatas.membership_card_discount_price }}
          </div>
          <div class="goods-kucun">
            <span>库存：</span>
            {{ detailDatas.goods_number }}
          </div>
        </div>
        <div class="close-goods">
          <i class="iconfont icon-round_delete" @click="closeCart"></i>
        </div>
        <div class="goods-number">
          <span>数量</span>
          <div class="num">
            <button @click="minusNum">-</button>
            <input type="number" v-model.number="buyNum" />
            <button @click="addNum">+</button>
          </div>
        </div>
        <div class="mask-footer">
          <button class="buy">立即购买</button>
          <button class="cart" @click="addcart">加入购物车</button>
        </div>
      </div>
    </mt-popup>
    <div class="detail-freight">
      <div><span>朋友讨论圈</span><i class="iconfont icon-jiantou1"></i></div>
    </div>
    <!-- tab切换 -->
    <div class="detail-tabs">
      <mt-navbar v-model="selected">
        <mt-tab-item id="tab1">商品详情</mt-tab-item>
        <mt-tab-item id="tab2">规格参数</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" class="detail-tas-container">
        <mt-tab-container-item id="tab1" v-html="detailDatas.desc_mobile">
          111</mt-tab-container-item
        >
        <mt-tab-container-item id="tab2">
          <table>
            <!-- <tr v-for="(id, index) in detailDatas.data.goods_sn"
              :key="index>
              <td>{{id}}</td>
            </tr> -->
            <tr
              v-for="(attr, index) in detailDatas.attr_parameter"
              :key="index"
            >
              <td>{{ attr.attr_name }}</td>
              <td>{{ attr.attr_value }}</td>
            </tr>
          </table>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 评论 -->
    <div
      class="detail-comment"
      id="title2"
      style="background: pink; height: 50rem"
    >
      <h2>商品评价</h2>
    </div>
    <!-- 点击分享按钮显示蒙版 -->
    <div class="share-mask" v-show="shareMask" @click="closeShare"></div>
    <div class="share-contert" v-show="shareMask">
      <div class="share-item" v-if="!weixinshowHide" @click="showShareInfoFn">
        <div class="iconfont icon-weixin"></div>
        <div class="text">发送给好友</div>
      </div>
      <div class="share-item" @click="showSharePosterFn">
        <div class="iconfont icon-haibaofenxiang"></div>
        <div class="text">生成海报</div>
      </div>
    </div>
    <!-- 发送给好友 -->
    <SharInfo
      v-on:setShareInfoStatus="setShareInfoStatus"
      :showShareInfo="showShareInfo"
    />
    <!-- 海报组件 -->
    <SharePoster
      :showshareposter="showshareposter"
      v-on:closeSharePoster="closeSharePoster"
      :posterDatas="posterDatas"
    />
    <!-- 底部 -->
    <ul class="detail-footer">
      <li>
        <i class="iconfont icon-kefu1 xx"></i>
        <p>客服</p>
      </li>
      <li>
        <i class="iconfont icon-shoucang1 xx"></i>
        <p>收藏</p>
      </li>
      <router-link to="/cart" tag="li">
        <i class="iconfont icon-gouwuche xx"></i>
        <p>购物车</p>
        <span>{{ countCart }}</span>
        <div :class="{ 'add-num': flag }" v-if="flag">+{{ buyNum }}</div>
      </router-link>

      <li><button class="buy">立即购买</button></li>
      <li><button class="cart" @click="addcart">加入购物车</button></li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import city from "@/assets/json/city";
import debounce from "lodash.debounce"; //cnpm i --save lodash.debounce  防抖函数
import { isWeixin } from "@/utils/index.js";
import SharInfo from "./components/ShareInfo";
import SharePoster from "./components/SharePoster";
console.log(isWeixin);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    SharInfo,
    SharePoster,
  },
  data() {
    //这里存放数据
    return {
      url: "/goods/show",
      type: "post",
      selected: "tab1",
      sheng: "",
      shi: "",
      qu: "",
      bgOpacity: 0,
      bgOpacityI: 0.4,
      colorI: "#fff",
      bgFlag: false,
      obj: {},
      popupVisible: false,
      popupVisible2: false,
      navList: ["商品", "详情", "评论"],
      navActive: 0,
      shareMask: false,
      weixinshowHide: false,
      showShareInfo: false,
      showshareposter: false,
      buyNum: 1,
      flag: false,
      flagTimer: null,
      params: {
        goods_id: 1153,
      },
      slots: [
        {
          flex: 1,
          values: Object.keys(city),
          className: "slot1",
          textAlign: "center",
          defaultIndex: 0,
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center",
        },
        {
          divider: true,
          content: "-",
          className: "slot4",
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    detailDatas() {
      return this.$store.state.detailDatas;
    },
    detailInfoDatas() {
      return this.$store.state.detailInfoDatas;
    },
    posterDatas() {
      return this.$store.state.posterDatas;
    },
    countCart() {
      let count = 0;
      this.$store.state.cartDatas.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    reqDetail() {
      this.obj = {
        url: this.url,
        params: this.params,
        type: this.type,
      };
      this.$store.dispatch("actChangDetail", this.obj);
    },
    onValuesChange(picker, values) {
      picker.setSlotValues(1, Object.keys(city[values[0]]));
      picker.setSlotValues(2, city[values[0]][values[1]]);
      this.sheng = values[0];
      this.shi = values[1];
      this.qu = values[2];
    },
    changeNavTabs(index) {
      this.$nextTick(() => {
        this.navActive = index;
        let element = document.querySelector("#title" + index);
        console.log(element.offsetTop);
        let top =
          element.offsetTop - window.scrollY - this.$refs.header.offsetHeight;
        console.log(window.scrollY);
        window.scrollBy({ top: top, left: 0, behavior: "smooth" }); //, behavior: "smooth"滑动的时候添加一个滚动条效果
      });
    },
    scrollChangeOpacity() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(top);
      var opacity = top / 200;
      opacity = opacity > 1 ? 1 : opacity;
      this.bgOpacity = opacity;
      this.bgOpacityI = opacity > 0.4 ? 0 : 0.4;
      this.colorI = opacity > 0.4 ? "#777" : "#fff";
      this.bgFlag = opacity > 0.4 ? true : false;
    },
    scrollPage: debounce(function () {
      const headerHeight = this.$refs.header.offsetHeight;
      // console.log(headerHeight);
      const titles = [];
      titles.push(document.querySelector("#title0"));
      titles.push(document.querySelector("#title1"));
      titles.push(document.querySelector("#title2"));
      // console.log(titles);
      const { scrollY } = window;
      titles.reduce((total, title, index) => {
        if (
          !document.querySelector("#title0") &&
          !document.querySelector("#title1") &&
          !document.querySelector("#title2")
        ) {
          return;
        }
        if (total) return total;
        if (scrollY + headerHeight < title.offsetTop + title.offsetHeight) {
          this.navActive = index;
          total = true;
        }
        return total;
      }, false);
    }, 500),

    showShare() {
      this.shareMask = true;
      if (isWeixin()) {
        this.weixinshowHide = true;
      }
    },
    closeShare() {
      this.shareMask = false;
    },
    setShareInfoStatus(data) {
      this.showShareInfo = data;
    },
    // 显示发送给好友蒙版
    showShareInfoFn() {
      this.showShareInfo = true;
      this.shareMask = false;
    },
    // 显示生成海报蒙版
    showSharePosterFn() {
      this.showshareposter = true;
      this.shareMask = false;
    },
    closeSharePoster() {
      this.showshareposter = false;
    },
    // 点击减号商品数量减减
    minusNum() {
      if (this.buyNum > 1) {
        this.buyNum--;
      } else {
        this.buyNum = 1;
      }
    },
    // 点击加号商品数量加加
    addNum() {
      this.buyNum = this.buyNum + 1;
    },
    // 关闭购物车
    closeCart() {
      this.popupVisible = false;
    },
    // 加入购物车
    addcart() {
      this.popupVisible = false;
      this.shareMask = false;
      this.flag = true;
      this.flagTimer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      // 添加购物车
      let detailDatas = this.$store.state.detailDatas;
      var isCart = this.$store.state.cartDatas.find((item) => {
        if (item.goods_id == detailDatas.goods_id) {
          item.value += this.buyNum;
        }
        return item.goods_id == detailDatas.goods_id;
      });
      // isCart如果条件成立，说明购物车不存在当前数据
      if (!isCart) {
        var addCartDatas = {
          goods_id: detailDatas.goods_id,
          goods_thumb: detailDatas.goods_thumb,
          goods_name: detailDatas.goods_name,
          shop_price: detailDatas.shop_price,
          market_price: detailDatas.market_price,
          value: 1,
          isSelect: true,
        };
      }
      this.$store.commit("setCartDatas", addCartDatas);

      // let arr = [];
      // arr.push(detailDatas);
      // localStorage.setItem("carts", JSON.stringify(arr));
      // console.log(this.$store.state.cartDatas)
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let oTop = document.documentElement || document.body;
    oTop.scrollTop = 0;
    this.params.goods_id = this.$route.params.id;
    this.reqDetail();
    this.$nextTick(() => {
      this.slots[0].defaultIndex = 15;
    });
    document.addEventListener("scroll", this.scrollPage);
    window.addEventListener("scroll", this.scrollChangeOpacity, false);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("scroll", this.scrollChangeOpacity, false);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
html,
body {
  background: #dddddc;
  padding-bottom: 2.5rem;
}
.Detail-page {
  width: 100%;
  //遮罩加入购物
  .detail-mask {
    width: 100%;
    .detail-goods-info {
      width: 100%;
      height: 30vh;
      background: #fff;
      position: absolute;
      bottom: 0;
      padding: 2rem 1rem;
      box-sizing: border-box;
      // width: calc(100% - 4rem);
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
      .detail-goods-img {
        float: left;
        width: 9.2rem;
        margin-top: -4rem;
        width: 28%;
        img {
          border-radius: 1rem;
          width: 100%;
          box-shadow: 2px 2px 15px rgba(46, 58, 76, 0.17) !important;
        }
      }
      .detail-goods-title {
        font-size: 1.5rem;
        width: 100%;
        .goods-con,
        .goods-price,
        .goods-kucun {
          // background-color: rgb(235, 201, 201);
          padding: 0 1rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 0.5rem;
        }
        .goods-price {
          color: red;
          font-weight: 700;
          font-size: 1.6rem;
        }
        .goods-kucun {
          margin-left: 28%;
          color: rgb(128, 126, 126);
          font-size: 1.2rem;
        }
      }
      .close-goods {
        float: right;
        margin-top: -10.5rem;
      }
      .goods-number {
        display: flex;
        font-size: 1.4rem;
        span {
          width: 90%;
          padding-left: 1rem;
        }
        div {
          width: 40%;
          button {
            height: 30px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background-color: rgb(245, 244, 244);
            border: 1px solid #eee;
            position: relative;
            padding: 5px 10px;
            vertical-align: middle;
            &:first-child {
              border-top-left-radius: 0.5rem;
              border-bottom-left-radius: 0.5rem;
            }
            &:last-child {
              border-top-right-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
            }
          }
          input {
            width: 33px;
            height: 26px;
            padding: 1px;
            border: 1px solid #eee;
            border-width: 1px 0;
            border-radius: 0;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            color: #666;
            font-size: 14px;
            vertical-align: middle;
            text-align: center;
          }
        }
      }
      .mask-footer {
        width: 100%;
        height: 5rem;
        position: absolute;
        bottom: 0;
        left: 0;
        color: white;
        button {
          width: 50%;
          line-height: 5rem;
          color: white;
        }
        .buy {
          background: #fba534;
        }
        .cart {
          background: #f92028;
        }
      }
    }
  }
  // 商品规格参数
  .detail-tabs {
    background: rgb(253, 253, 253);
    margin-top: 1rem;
    .mint-tab-container {
      table {
        width: 96%;
        margin-left: 2%;
        tr {
          display: flex;
          border-collapse: collapse;
          font-size: 12px;
          border-spacing: 0;
          line-height: 18px;
          td {
            width: 80%;
            border: 1px solid #dadada;
            padding: 1rem 0 1rem 1rem;
            &:first-child {
              width: 20%;
            }
          }
        }
      }
      .section {
        .move-remove {
          display: none;
        }
        img {
          width: 96%;
          margin-left: 2%;
        }
      }
    }
    .mint-tab-item {
      .mint-tab-item-label {
        font-size: 1.4rem;
      }
    }
    .is-selected {
      color: #f44;
      font-size: 1.4rem;
      border-bottom: 0rem;
      &::after {
        content: "";
        width: 3rem;
        height: 0.2rem;
        display: block;
        background: #f44;
        margin: 1rem auto 0;
      }
    }
  }
  // 头部样式
  .detail-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.4rem;
    display: flex;
    color: #555;
    padding: 0 2rem;
    z-index: 99;
    font-size: 1.5rem;
    text-align: center;
    line-height: 4.4rem;
    width: calc(100% - 4rem);
    justify-content: space-between;
    // background: rgba(red, green, blue, 0.4);
    // 字体图标
    .i {
      width: 15%;
      // color: white;
      margin-top: 0.8rem;
      transition: all 0.3s linear;
      i {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        margin: 0 auto;
        // background-color: rgba(41, 47, 54, 0.4);
      }
    }
    // title-tabs
    div {
      width: 70%;
      display: flex;
      opacity: 1;
      padding-bottom: 1px;
      span {
        flex: 1;
      }
      .active {
        color: red;
        border-bottom: 1px solid red;
      }
    }
  }
  // 轮播图
  .detail-swiper {
    width: 100%;
    height: 37.5rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .detail-goods-info {
    background: #fff;
    .detail-goods-price {
      padding: 1rem;

      .newprice {
        color: red;
        font-size: 2rem;
        margin-right: 1rem;
      }
      .oldprice {
        text-decoration: line-through;
      }
    }
    .detail-vip {
      background: #fff;
      width: 90%;
      margin: 0 auto;
      height: 3rem;
      background: #f7f8fc;
      line-height: 3rem;
      padding: 1rem;
      border-radius: 2rem;
      img {
        width: 1.8rem;
        vertical-align: middle;
      }
      span {
        margin: 0 0.5rem;
      }
      .detail-register {
        float: right;
        background: #000;
        color: #e3c49e;
        border-radius: 2rem;
        .icon-jiantou1 {
          line-height: 1.6rem;
        }
      }
    }
    .detail-goodsName {
      font-size: 1.5rem;
      padding: 1rem;
    }
    .detail-number {
      display: flex;
      color: #999;
      padding: 1rem;

      div {
        flex: 1;
        font-size: 1.4rem;
        text-align: center;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }
  .detail-serve,
  .detail-address,
  .detail-selected,
  .detail-freight {
    background: #fff;
    margin-top: 1rem;
    font-size: 1.4rem;
    div {
      padding: 0.5rem 1rem;
      height: 3rem;
      line-height: 3rem;
      &:first-child {
        border-bottom: 1px solid #efefef;
      }
      span,
      i {
        color: #666;
      }
      .icon-jiantou1 {
        float: right;
        font-size: 2.2rem;
      }
    }
  }
  .address {
    width: 100%;
    height: 30vh;
    background-color: #fff;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  }
  // 分享样式
  .share-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
  .share-contert {
    width: 100%;
    height: 8rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .share-item {
      flex: 1;
      .iconfont {
        font-size: 3rem;
        color: #80d640;
      }
      .text {
        font-size: 1.4rem;
      }
    }
  }
  .detail-footer {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 5rem;
    width: 100%;
    border-top: 1px solid #efefef;
    li {
      width: 15%;
      height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #efefef;
      font-size: 1.2rem;
      position: relative;
      .xx {
        font-size: 2rem;
      }
      button {
        color: white;
        background: transparent;
        font-size: 1.6rem;
      }
      span {
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: #f44;
        position: absolute;
        right: 1.2rem;
        top: 0.3rem;
        color: white;
        text-align: center;
      }
      &:nth-child(4) {
        width: 27.5%;
        background-color: #f44;
        border: none;
      }
      &:nth-child(5) {
        background-color: #ff976a;
        width: 27.5%;
      }
      .add-num {
        color: red;
        font-size: 2rem;
        width: 100%;
        text-align: center;
        position: absolute;
        font-weight: bold;
        top: -1rem;
        // opacity: 0;
        font-size: 1.8rem;
        font-family: Arial, Helvetica, sans-serif;
        animation: moveNum 1s linear;
      }
      @keyframes moveNum {
        0% {
          top: 0;
          opacity: 0;
        }
        50% {
          top: -3rem;
          opacity: 1;
        }
        100% {
          top: -3rem;
          opacity: 0;
        }
      }
    }
  }
}
</style>