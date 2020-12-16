<!--  -->
<template>
  <div class="SearchBox">
    <div class="Serach">
      <i class="iconfont icon-jiantou3" @click="goback"></i>
    </div>
    <div class="Text">
      <input type="text" placeholder="请输入要搜索的商品" v-model="keyWords" />
    </div>
    <i class="iconfont icon-sousuo2" @click="setKeyWords"></i>
    <i
      v-if="toggle"
      @click="toggleStyle"
      class="iconfont icon-leimupinleifenleileibie"
    ></i>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["toggle"],
  data() {
    //这里存放数据
    return {
      toggleFlag: false,
      keyWords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goback() {
      window.history.go(-1);
    },
    toggleStyle() {
      this.toggleFlag = !this.toggleFlag;
      this.$emit("changeStyle", this.toggleFlag);
    },
    setKeyWords() {
      if (this.keyWords) {
        this.$router.push("/searchlist?keywords=" + this.keyWords);
        this.$store.commit("changeSearchList", this.keyWords);
      }
    },
  },
  mounted() {
    this.keyWords = this.$store.state.setKeyWords;
  },
};
</script>
<style lang="less">
.SearchBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  height: 3.4rem;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
  .Serach {
    text-align: center;
    width: 10%;
    line-height: 3.4rem;
    .iconfont {
      line-height: 3rem;
    }
  }
  .Text {
    width: 85%;
    height: 3rem;
    input {
      border-radius: 2rem;
      width: 100%;
      line-height: 3rem;
      font-size: 1.4rem;
      border: 1px solid #efefef;
      text-indent: 1rem;
    }
  }
  .icon-sousuo2 {
    line-height: 3rem;
    position: relative;
    right: 3rem;
  }
  .icon-leimupinleifenleileibie {
    line-height: 3rem;
    margin-right: 1rem;
  }
}
</style>