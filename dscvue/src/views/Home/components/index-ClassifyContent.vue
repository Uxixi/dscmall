<!-- 分类内容组件 -->
<template>
  <div class="indexClassifyContent">
    <div class="Content1">
      <ul class="category">
        <li>
          <img
            src="https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg"
          />
          <p>女装</p>
        </li>
        <li>
          <img
            src="https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg"
          />
          <p>女装</p>
        </li>
        <li>
          <img
            src="https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg"
          />
          <p>女装</p>
        </li>
        <li>
          <img
            src="https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg"
          />
          <p>女装</p>
        </li>
        <li>
          <img
            src="https://x.dscmall.cn/storage/data/touch_icon/15985734466563.jpg"
          />
          <p>女装</p>
        </li>
      </ul>
      <div class="brand">
        <h2>品牌精选</h2>
        <ul class="trademark">
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
          </li>
          <li>
            <img
              src="https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg"
            />
            <p>esprit</p>
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
    return {};
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
.indexClassifyContent {
  width: 100%;
  .category {
    width: 95%;
    display: flex;
    background: #fff;
    border-radius: 1rem;
    margin: 0 auto;
    li {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 5.39rem;
        height: 5.39rem;
      }
    }
  }
  .brand {
    width: 95%;
    margin: 1rem auto 1rem;
    border-radius: 1rem;
    padding: 1rem 0rem 2rem;
    background: #fff;
    h2 {
      padding: 1rem;
    }
    .trademark {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        display: flex;
        margin-bottom: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 7.1rem;
          height: 3.1rem;
        }
      }
    }
  }
}
</style>