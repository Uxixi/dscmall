<!--  -->
<template>
  <div class="Cart">
    <!-- 没有商品时购物车显示内容 -->
    <div class="CartContent1" v-if="!cartDatas.length">
      <img src="https://x.dscmall.cn/static/dist/img/cart-empty.png" alt="" />
      <div class="goshopping">您的购物车还是空空的，快去逛逛吧！</div>
      <div>
        <router-link to="/home/index" tag="button" class="Stroll"
          >去逛逛</router-link
        >
        <span></span>
        <button class="Look">看看关注</button>
      </div>
    </div>
    <div class="CartContent2" v-else>
      <ul>
        <li
          v-for="(item, index) in cartDatas"
          :key="index"
          @click="toDetail(item.goods_id)"
        >
          <div class="check" @click="changeSelectStatus(item, index)">
            <i class="iconfont icon-danxuankuang" v-if="!item.isSelect"></i>
            <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
          </div>
          <div class="itemcontent">
            <img :src="item.goods_thumb" />
            <div class="right">
              <p>{{ item.goods_name }}</p>
              <div class="price">
                <span>{{ item.shop_price }}</span>
                <div class="addgoods">
                  <button @click.stop="jianCart(index)">-</button>
                  <input type="number" v-model="item.value" />
                  <button @click.stop="addCart(index)">+</button>
                  <i class="iconfont icon-shoucang1"></i>
                  <i
                    class="iconfont icon-shanchu1"
                    @click.stop="deleCart(index)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="cart-footer">
        <div class="selectAll" @click="changeSelectAllStatus">
          <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
          <i class="iconfont icon-danxuankuangxuanzhong" v-else></i>
          <span>全选</span>
        </div>
        <div class="totalPrice">
          <div class="price">
            合计：<span>{{ total.toFixed(2) }}</span>
          </div>
          <div class="tips">(不含运费，已节省 <span></span> )</div>
        </div>
        <div class="goBuy">去结算({{ count }})</div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入Footer组件
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  computed: {
    cartDatas() {
      return this.$store.state.cartDatas;
    },
    selectAll() {
      let selectStatus = this.$store.state.cartDatas.every((item) => {
        return item.isSelect == true;
      });
      return selectStatus;
    },
    total() {
      let totalPrice = 0;
      this.$store.state.cartDatas.map((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
    count() {
      let count = 0;
      this.$store.state.cartDatas.map((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
  },
  methods: {
    // 点击购物车列表数据的选择框
    changeSelectStatus(item, index) {
      item.isSelect = !item.isSelect;
      this.$store.commit("changeSelectStatus", { item, index });
      console.log(index);
    },
    ...mapMutations([
      "addCart",
      "jianCart",
      "deleCart",
      "changeSelectAllStatus",
    ]),
    // changeSelectAllStatus() {
    //   this.$store.commit("changeSelectAllStatus");
    // },
    // addCart(index) {
    //   this.$store.commit("addCart", index);
    // },
    // jianCart(index) {
    //   this.$store.commit("jianCart", index);
    // },
    // deleCart(index) {
    //   this.$store.commit("deleCart", index);
    // },
    toDetail(gid) {
      console.log(gid);
      this.$router.push("detail/" + gid);
    },
  },
};
</script>
<style lang="less">
body,
html {
  background-color: #f4f4f4;
  // 没有商品时购物车显示内容
  .CartContent1 {
    width: 95%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 3rem 0;
    img {
      width: 10rem;
      height: 10rem;
    }
    .goshopping {
      margin: 2rem 0;
    }
    div {
      .Stroll,
      .Look {
        border: 1px solid #ccc;
        padding: 0.5rem 1rem;
        background: #fff;
      }
      span {
        display: inline-block;
        width: 1rem;
      }
    }
  }
  .CartContent2 {
    width: 95%;
    margin: 1rem auto;

    ul {
      width: 100%;
      li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        .check {
          width: 10%;
          text-align: center;
        }
        .itemcontent {
          width: 90%;
          display: flex;
          background-color: #fff;
          padding: 1rem;
          img {
            width: 7rem;
            height: 7rem;
          }
          .right {
            padding: 0 1rem;
            p {
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .price {
              display: flex;
              margin-top: 1rem;
              justify-content: space-between;
              span {
                &::before {
                  content: "￥";
                }
              }
              .addgoods {
                display: flex;
                align-items: center;
                line-height: 2rem;
                button {
                  padding: 0 0.6rem;
                  border: 1px solid #efefef;
                  height: 2rem;
                  line-height: 2rem;
                  background: #fff;
                }
                input {
                  width: 2rem;
                  height: 2rem;
                  text-align: center;
                  box-sizing: border-box;
                  border: 1px solid #efefef;
                }
                .iconfont {
                  font-size: 1.4rem;
                  margin-left: 0.6rem;
                }
              }
            }
          }
        }
      }
    }
    // 购物车结算
    .cart-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 5rem;
      left: 0;
      width: 100%;
      height: 5rem;
      background: #fff;
      text-align: center;
      font-size: 1.4rem;

      border-top: 1px solid #efefef;
      .selectAll {
        width: 20%;
        height: 100%;
        line-height: 5rem;
        span {
          margin-left: 0.5rem;
        }
      }
      .totalPrice {
        width: 50%;
        text-align: right;
        padding: 1rem;
        .price {
          span {
            color: red;
            font-weight: 700;
            &::before {
              content: "￥";
            }
          }
        }
        .tips {
          color: #999;
          font-size: 1.2rem;
        }
      }
      .goBuy {
        width: 30%;
        height: 100%;
        line-height: 5rem;
        font-size: 1.6rem;
        background: #f44;
      }
    }
  }
}
</style>