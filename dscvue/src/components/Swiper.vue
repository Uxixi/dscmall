<!--  -->
<template>
  <div class="swiper">
    <mt-swipe :auto="0" @change="Bcolor">
      <mt-swipe-item>
          <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978394783.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978396430.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395241.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395260.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978397105.jpg" alt="">
      </mt-swipe-item>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    Bcolor(index){
      // console.log(index);
      this.$emit("bcolor",index)
    }

  },
  
};
</script>
<style lang='less'>
  .swiper{
    width: 90%;
    margin: 0 auto;
    height: 12rem;
    img{
      width: 100%;
      border-radius: 1rem;
    }
  }
</style>