<!--海报 -->
<template>
  <div class="share-poster" v-if="showshareposter" @click="closeSharePoster">
    <div class="poster-content">
      <div class="poster-text">长按保存至相册</div>
      <div class="close-poster" @click="closeSharePoster">
        <img src="@/assets/images/poster-close.png" alt="" />
      </div>
      <div class="poster-img">
        <img :src="posterDatas.image" alt="" />
      </div>
      <div class="poster-title">{{ posterDatas.title }}</div>
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
    return {};
  },
  props: {
    showshareposter: Boolean,
    posterDatas: Object,
  },
  //监听属性 类似于data概念
  computed: {}, 
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    closeSharePoster() {
      this.$emit("closeSharePoster");
    },
  },
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
.share-poster {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  .poster-content {
    position: relative;
    width: 70%;
    margin-left: 15%;
    height: 70%;
    margin-top: 20%;
    // position: ;
    background: #fff;
    .poster-text {
      width: 100%;
      position: absolute;
      bottom: -3rem;
      color: white;
      text-align: center;
    }
    .close-poster {
      position: absolute;
      right: 1.5rem;
      top: -3rem;
      img {
        height: 3rem;
      }
    }
    .poster-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>