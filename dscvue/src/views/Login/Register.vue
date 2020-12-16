<!--  -->
<template>
  <div class="Register">
    <div class="register-content">
      <div class="iconfont icon-jiantou3" @click="goback"></div>
      <h2>新用户注册</h2>
      <form class="content-item">
        <div class="item">
          <span class="iconfont icon-dianpu"></span>
          <input type="text" placeholder="请输入图片验证码" />
          <button>111</button>
        </div>
        <div class="item">
          <span class="iconfont icon-dianpu"></span>
          <input type="text" placeholder="请输入手机号" />
          <button>获取验证码</button>
        </div>
        <div class="item">
          <span class="iconfont icon-dianpu"></span>
          <input type="text" placeholder="请输入短信验证码" />
        </div>
        <div class="item">
          <span class="iconfont icon-dianpu"></span>
          <input type="text" placeholder="请输入登录密码" />
        </div>
        <button class="signIn">立即注册</button>
        <div class="agreement">
          若您输入的手机号未注册，将会进入注册流程。注册即视为同意<span
            @click="popupVisible = true"
            >《用户协议》</span
          >
        </div>
        <router-link to="/login?id=0" tag="p"
          >去登录 <span class="iconfont icon-jiantou1"></span>
        </router-link>
      </form>
    </div>
    <mt-popup v-model="popupVisible" position="popup-fade">
      <p>
        商创网以此声明对本站用户隐私保护的许诺。随着本站服务范围的扩大，会随时更新隐私声明。我们欢迎您随时查看隐私声明。详细隐私政策，您可参考
        <router-link to="/articleDetail">《隐私声明》</router-link>
      </p>
      <p>
        商创网非常重视对用户隐私权的保护，用户的邮件及手机号等个人资料为用户重要隐私，本站承诺不会将个人资料用作它途；承诺不会在未获得用户许可的情况下擅自将用户的个人资料信息出租或出售给任何第三方，但以下情况除外：111
      </p>
      <p>A、用户同意让第三方共享资料；</p>
      <p>B、用户为享受产品和服务同意公开其个人资料；</p>
      <p>C、本站发现用户违反了本站服务条款或本站其它使用规定。</p>
      <strong>使用说明</strong>
      <p>
        商创网用户可以通过设定的密码来保护账户和资料安全。用户应当对其密码的保密负全部责任。请不要和他人分享此信息。如果您使用的是公共电脑，请在离开电脑时退出商创网、以保证您的信息不被后来的使用者获取。
      </p>
      <strong>服务条款说明</strong>
      <p>接受商创网的用户同时受本站用户协议的约束。</p>
      <p>新增此条</p>
      <p>新增词条05181055</p>
      <p>新增词条05181100</p>
      <button @click="popupVisible = false">确定</button>
    </mt-popup>
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
      popupVisible: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
   
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goback() {
      window.history.back(-1);
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
.Register {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  .register-content {
    width: 100%;
    padding: 2rem;
    width: calc(100% - 4rem);
    .icon-jiantou3 {
      padding: 2rem 0;
      font-size: 1.6rem;
      color: #bdbdbd;
    }
    h2 {
      padding: 1rem 0 2rem 0;
      font-size: 3rem;
      font-weight: normal;
    }
    .content-item {
      width: 100%;
      .item {
        height: 4.4rem;
        line-height: 4.4rem;
        display: flex;
        background: #fff;
        margin-bottom: 1rem;
        border-bottom: 1px solid #efefef;
        span {
          width: 10%;
          text-align: center;
          line-height: 4.4rem;
        }
        input {
          flex: 2;
          line-height: 4.4rem;
        }
        button {
          flex: 1;
        }
      }
      .signIn {
        width: 100%;
        height: 4.4rem;
        color: white;
        font-size: 1.4rem;
        border-radius: 5px;
        background: #f44;
      }
      .agreement {
        font-size: 1.3rem;
        margin: 1.5rem 0;
        color: #888;
        span {
          color: #4b89dc;
        }
      }
      p {
        color: rgb(245, 93, 6);
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont {
          font-size: 1.8rem;
        }
      }
    }
  }
  .mint-popup {
    width: 24rem;
    height: 48rem;
    padding: 1.5rem 1.1rem;
    border-radius: 0.5rem;
    button {
      width: 100%;
      height: 4rem;
      border-radius: 5px;
      margin: 1rem 0;
      color: white;
      background: #f44;
    }
  }
}
</style>