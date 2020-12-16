<!-- 分类内容:class="{ active: cat_id == list1.cat_id }" -->
<template>
  <div class="CategoryContent">
    <ul class="mainLeft">
      <li
        v-for="list1 in leftLists"
        :key="list1.cat_id"
        @click="changeTab(list1.cat_id)"
      >
        {{ list1.cat_name }}
      </li>
    </ul>
    <div class="mainRight">
      <img :src="this.$store.state.ad" alt="" />
      <div class="lists" v-for="list in rightLists" :key="list.cat_id">
        <h2><span> - </span>{{ list.cat_name }}<span> - </span></h2>
        <ul>
          <li v-for="item in list.child" :key="item.cat_id">
            <router-link :to="'/categroplist/' + item.cat_id">
              <img :src="item.touch_icon" alt="" />
              <span>{{ item.cat_name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    leftLists: Array,
    rightLists: Array,
  },
  data() {
    //这里存放数据
    return {
      scroll: null,
    };
  },
  //监听属性 类似于data概念
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    srcollPage() {
      this.scroll = new BScroll(".mainRight", {
        pullUpLoad: true,
        scrollbar: true,
        pullDownRefresh: true,
        click: true,
        // and so on
      });
    },
    changeTab(cat_id) {
      this.$store.state.cat_id = cat_id;
      this.$store.dispatch("actChangeCategoryRight", cat_id);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.srcollPage();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.CategoryContent {
  width: 100%;
  height: 100%;
  .mainLeft {
    width: 25%;
    position: fixed;
    top: 4.4rem;
    left: 0;
    bottom: 4.9rem;
    padding: 0.5rem 0rem;

    li {
      color: #999;
      font-size: 1.4rem;
      line-height: 4rem;
      text-align: center;
    }
    .active {
      color: red;
      border-left: 2px solid red;
    }
  }
  .mainRight {
    width: 75%;
    margin-right: 0;
    position: absolute;
    top: 4.4rem;
    right: 0;
    padding: 1rem;
    z-index: -1;
    box-sizing: border-box;
    border-left: 1px solid #efefef;
    img {
      width: 100%;
    }
    .lists {
      h2 {
        color: #333;
        margin: 1.5rem 0 1rem;
        text-align: center;
        font-weight: normal;
        span {
          color: #efefef;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        li {
          width: 25%;
          padding: 0.5rem;
          margin-left: 1rem;
          text-align: center;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>