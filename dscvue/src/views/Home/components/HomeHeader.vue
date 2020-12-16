<!--  -->
<template>
  <div class="home-header">
    <header>
      <form action="">
        <input type="text" placeholder="请输入关键字" @click="goSearch" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
      <a href="" class="iconfont icon-dkw_xiaoxi"></a>
    </header>
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
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
<style lang="less">
.home-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 99;
  header {
    display: flex;
    form {
      width: 90%;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 0.7rem;
        border-radius: 1.5rem;
        margin-left: 1rem;
        text-indent: 1.5rem;
        width: calc(100% - 1rem);
      }
      i {
        position: absolute;
        right: 4.4rem;
        top: 0;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        color: #999;
      }
    }
    a {
      display: block;
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      color: #fff;
      font-size: 1.8rem;
    }
  }
}
</style>