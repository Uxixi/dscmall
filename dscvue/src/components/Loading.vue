<!--  -->
<template>
  <div class="loading">
    <img src="@/assets/images/loading.gif" alt="" />
    <div>玩命加载中……</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
</script>
<style lang="less">
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: aliceblue;
  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>