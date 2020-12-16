<!--  -->
<template>
  <div class="sort">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item, index) in classifyNavDatas" :key="index">
        <ul class="Bigbox">
          <li v-for="(value, index) in item" :key="index">
            <img :src="value.imgsrc" alt="" />
            <p>{{ value.title }}</p>
          </li>
        </ul>
      </mt-swipe-item>

      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item> -->
    </mt-swipe>
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
      classifyNavDatas: [
        [
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
          {
            id: 2,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 3,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png",
            title: "美容护肤",
          },
          {
            id: 4,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/8vjN7XPR9BD1BGqGYDGmJiQvk1UPH4duF4csjuaV.png",
            title: "母婴儿童",
          },
          {
            id: 5,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xypYud8p2sTivnyrf3cSmVwLt5ZalTtHraQqGYCl.png",
            title: "手机数码",
          },
          {
            id: 6,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xnzngK6mJ1VamCDXKd5GH51C3asWfCnd8btRiZn2.png",
            title: "微社区",
          },
          {
            id: 7,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/3QggHJzSCrK1osf8DUYQxCUC3RhxaUySDkc5EMoC.gif",
            title: "拼团",
          },
          {
            id: 8,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/JMambFMHt5z76qndHS0I0mjDCEr2u20JM7zDtMlr.gif",
            title: "预售",
          },
          {
            id: 9,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/jUsageRXcEmvz0G8QutdBJ9IJgUxFsxgWAgdpHeA.png",
            title: "拍卖",
          },
          {
            id: 10,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/KhlceHTjkqz49Bzijf4HWtumIuIf1E45a7l1aOAJ.gif",
            title: "超值礼包",
          },
        ],
        [
          {
            id: 11,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
          {
            id: 12,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 13,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png",
            title: "美容护肤",
          },
          {
            id: 14,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/8vjN7XPR9BD1BGqGYDGmJiQvk1UPH4duF4csjuaV.png",
            title: "母婴儿童",
          },
          {
            id: 15,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xypYud8p2sTivnyrf3cSmVwLt5ZalTtHraQqGYCl.png",
            title: "手机数码",
          },
          {
            id: 16,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xnzngK6mJ1VamCDXKd5GH51C3asWfCnd8btRiZn2.png",
            title: "微社区",
          },
          {
            id: 17,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/3QggHJzSCrK1osf8DUYQxCUC3RhxaUySDkc5EMoC.gif",
            title: "拼团",
          },
          {
            id: 18,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/JMambFMHt5z76qndHS0I0mjDCEr2u20JM7zDtMlr.gif",
            title: "预售",
          },
          {
            id: 19,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/jUsageRXcEmvz0G8QutdBJ9IJgUxFsxgWAgdpHeA.png",
            title: "拍卖",
          },
          {
            id: 20,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/KhlceHTjkqz49Bzijf4HWtumIuIf1E45a7l1aOAJ.gif",
            title: "超值礼包",
          },
        ],
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
.sort {
  width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  height: 20rem;
  margin-top: -5rem;
  background: white;
  //   background-color: rgb(207, 161, 161);
  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0rem;
  .Bigbox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      img {
        width: 100%;
      }
      p {
        text-align: center;
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 0.5rem;
    .mint-swipe-indicator {
      width: 1.5rem;
      height: 0.4rem;
      border-radius: 0%;
      margin: 0;
      background: rgb(248, 177, 177);
    }
    .is-active {
      border-radius: 0.2rem;
      opacity: 1;
      background: linear-gradient(-88deg, #ff4f2d, #f91f27);
    }
  }
}
</style>