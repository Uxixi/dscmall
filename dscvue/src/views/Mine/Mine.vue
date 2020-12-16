<!--  -->
<template>
  <div class="mine-page">
    <div>
      <div v-if="userInfo.token">
        <h2>个人中心内容</h2>
      </div>
      <IsLogin v-else />
    </div>
    <Footer></Footer> 
    <!-- v-if="isloginshow" -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

// 引入Footer组件
import Footer from "@/components/Footer.vue";
import IsLogin from "../Login/IsLogin";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    IsLogin,
  },
  data() {
    //这里存放数据
    return {
      isloginshow: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  // 方法集合
  methods: {
    mounted() {
      console.log(this.$store.state.userInfo);
    },
  },
};
</script>
<style>
</style>