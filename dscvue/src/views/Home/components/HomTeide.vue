<!--  -->
<template>
  <div class="tides">
    <div class="science" v-for="(list, index) in datalist" :key="index">
      <img :src="list.img" alt="" />
      <div class="science-main">
        <ul>
          <li v-for="(item, index) in list.imgChild" :key="index">
            <img :src="item.imgChild" alt="" />
            <div>{{ item.title }}</div>
            <p>
              ￥<strong>{{ item.price }}</strong
              ><small>00</small>
            </p>
          </li>
        </ul>
      </div>
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
      datalist: [
        {
          img:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/2xrOpGBonnFxQRzbgIEDM55NFSh0YHuTlQtap6Df.jpeg?imageView2/2/format/webp",
          imgChild: [
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg?imageView2/2/format/webp",
              title:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398",
            },
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/111237/22/12261/71627/5f0e935fE3ebba938/6713341b3b17ffd5.jpg?imageView2/2/format/webp",
              title:
                "beats Beats Studio3 Wireless苹果魔音耳机头戴式录音师3无线蓝牙降噪耳麦 魅影灰（6期分期免息） 通用版",
              price: "1698",
            },
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/85352/9/18726/144442/5e967c4fE4f13970d/4d14742ae133cc3a.jpg?imageView2/2/format/webp",
              title: "雷瓦 大功率可折叠负离子护发电吹风机RC-7800",
              price: "499",
            },
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/122820/6/3502/418286/5ed1b480E3d20de49/b2745a32c4e7d658.jpg?imageView2/2/format/webp",
              title:
                "机械师(MACHENIKE)浩空T90 Plus进阶版 17.3英寸巨幕游戏本笔记本电脑 (i7-10750H 8G 512G GTX1650Ti 4G)",
              price: "6999",
            },
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/124408/27/4053/22496/5ed8d01cE0c7a873d/4cec56a2fcbef123.jpg?imageView2/2/format/webp",
              title:
                "Apple AirPods 2无线蓝牙耳机 苹果手机iPhone/iPad/ Watch【原装正品】  Airpods(配无线充电盒) 【新款】H1芯片",
              price: "1278",
            },
            {
              imgChild:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg?imageView2/2/format/webp",
              title:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398",
            },
          ],
        },
        {
          img:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/Va48nGpd3dmIcsZDkFa7NHc229AMIQOQd8F6kHCZ.jpeg?imageView2/2/format/webp",
          imgChild: [
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i4/2064892827/O1CN01X42esX1WkoIU0ZKn3_!!2064892827-0-lubanu-s.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "【七夕礼物】雅诗兰黛倾慕晶彩唇膏 保湿补水 滋润防水 130枫叶色",
              price: "280",
            },
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01xXHwr31WkoFNkKLKZ_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title: "雅诗兰黛大牌蜜粉 臻透无痕蜜粉10g 定妆遮瑕",
              price: "500",
            },
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01Kdn6pN1WkoFVdp8Rj_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "雅诗兰黛沁水双层气垫BB霜  保湿遮瑕 水润奶油肌裸妆 官方正品",
              price: "590",
            },
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i4/2064892827/TB1UeiuXwvGK1Jjy0FaXXb7lpXa_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "雅诗兰黛肌透修护密集精华眼膜套装 4/8片装 提拉紧致 淡化细纹",
              price: "300",
            },
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i2/2064892827/O1CN011Wko8maFOoeOIz8_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title:
                "雅诗兰黛 花漾倾慕腮红渐变腮红 裸妆自然提亮肤色立体塑型修容",
              price: "450",
            },
            {
              imgChild:
                "https://img.alicdn.com/imgextra/i1/2064892827/O1CN01H34adN1WkoHZs75xp_!!0-item_pic.jpg_800x800.jpg?imageView2/2/format/webp",
              title: "雅诗兰黛面膜 小棕瓶双层面膜4片/8片 补水保湿 密集修护",
              price: "680",
            },
          ],
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
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.tides {
  width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  .science {
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
    img {
      border-radius: 1rem;
      width: 100%;
    }
    .science-main {
      overflow: auto;
      margin-top: -8rem;

      ul {
        width: 200%;
        display: flex;
        padding: 0 0.8rem;
        li {
          width: 15%;
          margin-right: 0.5rem;
          font-size: 1.4rem;
          background-color: #fff;
          border-radius: 1rem;
          img {
            border-radius: 1rem;
            width: 100%;
          }
          div {
            font-size: 1.3rem;
            color: #000;
            min-height: 3.4rem;
            line-height: 1.7rem;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            padding: 0.5rem 0.5rem 0;
          }
          p {
            color: red;
            text-align: center;
            padding-bottom: 0.5rem;
          }
        }
      }
    }
  }
}
</style>