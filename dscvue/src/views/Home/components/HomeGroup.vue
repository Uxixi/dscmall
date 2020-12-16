<!--  -->
<template>
  <div class="groupBooking">
    <div class="GBtitle">
      <h2>拼团专区</h2>
      <p>拼着买更便宜</p>
      <i class="iconfont icon-jiantou1"></i>
    </div>
    <div style="overflow: auto">
      <ul class="floor-content">
        <li v-for="(list, index) in dataLists" :key="index">
          <img class="img" :src="list.imgSrc" alt="" />
          <p>{{ list.title }}</p>
          <div class="jieshao">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4OTA3NTc5Ni0wZTQwLTRkMWUtYWI0Zi0wZTI0ZWYzMmU5Y2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODg3Q0Y0NTBFMjA4MTFFQUFDMERBQzY1NjBBRTk1QTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODg3Q0Y0NEZFMjA4MTFFQUFDMERBQzY1NjBBRTk1QTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDYxMjI3YWEtNjA5Zi00ZDA0LWFiOGQtYWJhZjZjZWYwZWI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg5MDc1Nzk2LTBlNDAtNGQxZS1hYjRmLTBlMjRlZjMyZTljYiIvPiA8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"
              alt=""
            />
            <span>￥</span>
            <strong>{{ list.nowPrice.slice(0, 4) }}</strong>
            <small>{{ list.nowPrice.slice(4) }}</small>
          </div>
          <p class="originalCost">￥{{ list.oldPrice }}</p>
        </li>
      </ul>
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
      floorDatas: [],

      dataLists: [
        {
          imgSrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title:
            "摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色",
          nowPrice: "159.00",
          oldPrice: "219.00",
        },
        {
          imgSrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/136701/21/7182/185568/5f3a3999Ee1709270/ee7d949e815b844e.jpg?imageView2/2/format/webp",
          title:
            "小熊（Bear）烤面包机多士炉三明治机电饼铛电热锅电火锅电蒸锅多功能早餐机 DSL-A13F1",
          nowPrice: "299.00",
          oldPrice: "349.00",
        },
        {
          imgSrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/144172/36/2269/491991/5f02ded8E6f1c9bc1/31abed8d1fa7d815.jpg?imageView2/2/format/webp",
          title:
            "海氏海诺 75%酒精湿巾 一次性消毒酒精棉片大号 单片独立包装 18*15cm*50片 便携小包装免",
          nowPrice: "19.90",
          oldPrice: "25.80",
        },
        {
          imgSrc:
            "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536617317847.jpg?imageView2/2/format/webp",
          title: "WMNS Air Jordan 13 aj13 鳄鱼皮纹理 女鞋篮球鞋 - AQ1757 004",
          nowPrice: "1100.00",
          oldPrice: "1200.00",
        },
        {
          imgSrc:
            "https://x.dscmall.cn/storage/data/gallery_album/113/thumb_img/113_thumb_G_1588096566135.jpg?imageView2/2/format/webp",
          title: "雅漾活泉喷雾*2",
          nowPrice: "50.00",
          oldPrice: "150.00",
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
.groupBooking {
  background: white;
  padding: 1rem;
  width: 85%;
  margin: 1rem auto;
  border-radius: 1rem;
  .GBtitle {
    display: flex;
    padding: 0rem 0rem 0.8rem;
    line-height: 2.3rem;

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
  .floor-content {
    display: flex;
    margin-top: 1.5rem;
    li {
      width: 120px;
      margin-right: 0.5rem;
      .img {
        width: 100%;
      }
      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .jieshao {
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        padding: 0.5rem 0rem;
        img {
          width: 20%;
        }
        span {
          font-size: 1.4rem;
        }
      }
      .originalCost {
        color: grey;
        text-align: center;
        text-decoration: line-through;
      }
    }
  }
}
</style>