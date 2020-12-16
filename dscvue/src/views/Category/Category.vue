<!--  -->
<template>
  <div class>
    <Search :toggle="toggle" />
    <CategoryContent :leftLists="leftLists1" :rightLists="rightLists" />
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

// 引入Footer组件
import Footer from "@/components/Footer.vue";
import Search from "../../components/Search";
import CategoryContent from "./CategoryContent";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Search,
    CategoryContent,
  },
  data() {
    //这里存放数据
    return {
      cat_id: 858,
      toggle: false,
    };
  },
  computed: {
    leftLists1() {
      // console.log("1");
      return this.$store.state.leftLists;
    },
    rightLists() {
      return this.$store.state.rightLists;
    },
  },
  mounted() {
    this.cat_id = this.$store.state.cat_id;
    this.$store.dispatch("actChangeCategoryLeft");
    this.$store.dispatch("actChangeCategoryRight", this.cat_id);
    // console.log(this.$store.state.leftLists);
  },
};
</script>
<style lang="less">
body,
html {
  background-color: #fff;
}
</style>