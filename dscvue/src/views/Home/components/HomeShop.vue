<!--  -->
<template>
  <div class="Shop">
    <div class="shop-title">
      <h2>店铺推荐</h2>
      <p>更多品质好店</p>
      <i class="iconfont icon-jiantou2"></i>
    </div>
    <div class="con">
      <ul>
        <li v-for="(list, index) in datalists" :key="index">
          <img :src="list.imgbigsrc" alt="" class="imgbig" />
          <img :src="list.logoimg" alt="" class="imglogo" />
          <div class="info">
            <p class="info-title">{{ list.name }}</p>
            <p>
              共计<span>{{ list.num }}</span
              >件商品
            </p>
          </div>
        </li>
      </ul>
    </div>
    <ul class="adv-list">
      <li v-for="(item, index) in advLists" :key="index">
        <img :src="item.advimg" alt="" />
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
  data() {
    //这里存放数据
    return {
      datalists: [
        {
          imgbigsrc:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1595180901830760018.jpg?imageView2/2/format/webp",
          logoimg:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1536872208964241423.jpg?imageView2/2/format/webp",
          name: "普陀区 - 万卓旗舰店",
          num: "13",
        },
        {
          imgbigsrc:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598316246456357634.jpg?imageView2/2/format/webp",
          logoimg:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598316246303568918.jpg?imageView2/2/format/webp",
          name: "创造旗舰店",
          num: "62",
        },
        {
          imgbigsrc:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598569068574637464.png?imageView2/2/format/webp",
          logoimg:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598552978820058889.jpg?imageView2/2/format/webp",
          name: "大商创旗舰店",
          num: "62",
        },
        {
          imgbigsrc:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598569068574637464.png?imageView2/2/format/webp",
          logoimg:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598552978820058889.jpg?imageView2/2/format/webp",
          name: "大商创旗舰店",
          num: "62",
        },
        {
          imgbigsrc:
            "https://x.dscmall.cn/storage/data/store_street/street_thumb/1598569068574637464.png?imageView2/2/format/webp",
          logoimg:
            "https://x.dscmall.cn/storage/images/seller_imgs/seller_logo/logo_thumb/1598552978820058889.jpg?imageView2/2/format/webp",
          name: "大商创旗舰店",
          num: "62",
        },
      ],
      advLists: [
        {
          advimg:
            "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468372.png",
        },
        {
          advimg:
            "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978469174.png",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style lang="less">
.Shop {
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  padding: 0 1rem 1rem;
  border-radius: 1rem;
  .shop-title {
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #efefef;
    h2 {
      font-size: 1.8rem;
      color: #000;
      font-weight: 600;
    }
    p {
      margin: 0rem 1rem;
    }
  }
  .con {
    overflow: auto;
    ul {
      width: 150%;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      li {
        width: 30%;
        position: relative;
        border-radius: 1rem;
        background-color: #f6f6f6;
        margin-right: 0.5rem;
        min-width: 0;
        .imgbig {
          width: 100%;
          height: 8.5rem;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .imglogo {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          margin-left: 50%;
          position: absolute;
          top: 7rem;
          left: -1.75rem;
        }
        .info {
          width: 100%;
          box-sizing: border-box;
          padding: 2rem 0.5rem;
          .info-title {
            width: 100%;
            font-size: 1.4rem;
            color: #333;
            height: 2rem;
            line-height: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            text-align: center;
            font-size: 1.2rem;
            color: #666;
            span {
              font-size: 1.4rem;
              color: #333;
              padding: 0 0.2rem;
            }
          }
        }
      }
    }
  }
  .adv-list {
    display: flex;
    justify-content: space-around;
    li {
      width: 48%;
      img {
        width: 100%;
      }
    }
  }
}
</style>