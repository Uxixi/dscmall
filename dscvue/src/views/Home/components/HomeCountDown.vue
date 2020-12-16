<!--  -->
<template>
  <div class="">
    <h2>{{ hours }}---{{ mins }}---{{ sec }}</h2>
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
      hours: 0,
      mins: 0,
      sec: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    mioashaFn() {
      // 电脑当前时间
      var nowTime = new Date();
      // 目标时间
      var targetTime = new Date("2020/11/19 21:44:52");
      //获取相差的毫秒数d
      var oTime = (targetTime - nowTime) / 1000;
      // 获取小时
      this.hours = parseInt((oTime / 60 / 60) % 24);
      // 获取分钟
      this.mins = parseInt((oTime / 60) % 60);
      // 获取秒数
      this.sec = parseInt(oTime % 60);

    },
  },
  mounted() {
    // this.scrollNewsFn();
    this.timer = setInterval(this.scrollNewsFn, 2000);
    this.timer2 = setInterval(this.mioashaFn, 1000);
    // this.mioashaFn();
  },
  destroyed() {
    // 销毁组件
    clearInterval(this.timer);
    clearInterval(this.timer2);
  },
};
</script>
<style lang="less">
    h2{
        text-align: center;
    }
</style>