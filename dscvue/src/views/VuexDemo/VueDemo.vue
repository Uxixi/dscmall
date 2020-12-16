 <!--  -->
 <template>
  <div class=""></div>
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
    changeNum() {
      //组件中执行的方法
      this.$store.commit("changeNum"); //changeNum是mutations中定义的
    },
  },
};
</script>
 <style lang="less">
</style>