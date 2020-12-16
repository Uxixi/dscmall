<!-- 
 -->
<template>
  <div class="Login-warp">
    <div class="login-content">
      <div class="logo">
        <img :src="logo" />
      </div>
      <div class="logo-tabs">
        <div
          class="logo-tabs-item"
          :class="{ active: loginFlag == 0 }"
          @click="changeLofinTabs(0)"
        >
          短信登录
        </div>
        <div
          class="logo-tabs-item"
          :class="{ active: loginFlag == 1 }"
          @click="changeLofinTabs(1)"
        >
          账号登录
        </div>
      </div>
      <div class="tabs-content">
        <!-- 短信登录内容 -->
        <div class="tabs-message" v-if="loginFlag == 0">
          <div class="tabs-input">
            <input
              type="text"
              placeholder="验证码"
              name="captcha"
              v-model="captcha"
            />
            <img
              src="http://localhost:3000/adminapi/captcha"
              @click="getCaptch"
              ref="captcha"
            />
          </div>
          <div class="tabs-input">
            <input
              type="number"
              placeholder="手机号"
              name="phone"
              v-model="phone"
            />
            <button v-if="!num" @click="getphoneCode">{{ text }}</button>
            <button v-else>已发送{{ num }}</button>
          </div>
          <div class="tabs-input yanzhengma">
            <input
              type="number"
              placeholder="输入短信验证码"
              name="code"
              v-model="code"
            />
          </div>
          <div class="tabs-input lijidenglu">
            <input
              type="button"
              value="立即登录"
              @click="phoneLoginFn"
              style="background: #f44"
            />
          </div>
        </div>
        <!-- 账号登录内容 -->
        <div class="tabs-Id" v-if="loginFlag == 1">
          <div class="tabs-input">
            <input
              type="text"
              placeholder="验证码"
              name="captcha"
              v-model="captcha"
            />
            <img
              src="http://localhost:3000/adminapi/captcha"
              @click="getCaptch"
              ref="captcha"
            />
          </div>
          <div class="tabs-input username">
            <input
              type="text"
              placeholder="用户名"
              name="user_name"
              v-model="user_name"
            />
          </div>
          <div class="tabs-input yanzhengma">
            <input
              v-if="hidePass"
              type="password"
              placeholder="输入密码"
              name="login_password"
              v-model="login_password"
            />
            <input
              v-else
              type="text"
              placeholder="输入密码"
              name="login_password"
              v-model="login_password"
            />
            <!-- 密码的显示隐藏 -->
            <i
              class="iconfont icon-yincang"
              v-if="hidePass"
              @click="showHidePass"
            ></i>

            <i class="iconfont icon-xianshi" v-else @click="showHidePass"></i>
          </div>
          <div class="tabs-input lijidenglu">
            <input
              type="button"
              @click="login"
              value="立即登录"
              style="background: #f44"
            />
          </div>
        </div>
        <router-link to="/register">
          <p class="toRegister">没有账号去注册</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { getPhoneCode, getPhoneLogin, getLogin } from "../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      logo: require("@/assets/logo.png"),
      loginFlag: 1,
      num: 0,
      phone: "",
      text: "获取验证码",
      code: "",
      captcha: "",
      hidePass: true,
      user_name: "",
      login_password: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    validatePhone() {
      return /^1[3|5|6|7|8][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeLofinTabs(index) {
      this.loginFlag = index;
    },
    getCaptch() {
      // 刷新验证码
      this.$refs.captcha.src =
        "http://localhost:3000/adminapi/captcha?t=" + new Date().getTime();
    },
    async getphoneCode() {
      if (this.validatePhone) {
        // 说明手机号可用
        this.num = 30;
        this.text = "重新发送验证码";
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
        let result = await getPhoneCode(
          "/getcode",
          {
            phone: this.phone,
          },
          "post"
        );
        console.log(result);
        // 获取手机验证码
      } else {
        // 说明手机号不可用
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 2000,
        });
      }
    },
    // 手机登录
    async phoneLoginFn() {
      var params = {
        phone: this.phone,
        code: this.code,
        captcha: this.captcha,
      };
      let result = await getPhoneLogin("/phonelogin", params, "post");
      if (result.status == 200) {
        this.$router.push("/home");
      }
    },
    async login() {
      console.log("账号登录");
      console.log(getLogin);
      var params = {
        captcha: this.captcha,
        user_name: this.user_name,
        login_password: this.login_password,
      };
      let result = await getPhoneLogin("/login", params, "post");

      if (result.status == 200) {
        this.$router.push("/home");
        this.$store.dispatch("setUserInfo", result);
      }
    },
    showHidePass() {
      this.hidePass = !this.hidePass;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$route.query.id);
    this.loginFlag = this.$route.query.id;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.Login-warp {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    width: 100%;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .logo {
      width: 10rem;
      height: 10rem;
      margin-bottom: 1rem;
      img {
        width: 100%;
      }
    }
    .logo-tabs {
      width: 100%;
      height: 4.4rem;
      display: flex;
      .logo-tabs-item {
        flex: 1;
        text-align: center;
        line-height: 4.4rem;
        background: #fff;
        border: 1px solid #efefef;
      }
      .active {
        background: rgb(202, 74, 74);
      }
    }
    .tabs-content {
      width: 100%;
      .tabs-message,
      .tabs-Id {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .tabs-input {
          height: 3.4rem;
          margin: 1.5rem 0 0 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          input {
            width: 70%;
            float: left;
            line-height: 3.4rem;
            font-size: 1.4rem;
            text-indent: 1rem;
            border: 1px solid #efefef;
          }
          i {
            width: 3rem;
            height: 4.6rem;
            text-align: center;
            line-height: 4.6rem;
            font-size: 2rem;
            position: absolute;
            right: 0;
          }
          button,
          img {
            width: 30%;
            line-height: 3.4rem;
            text-align: center;
          }
        }
        .username,
        .yanzhengma,
        .lijidenglu {
          height: 4.4rem;
          flex: 1;
          input {
            width: 100%;
            line-height: 4.4rem;
          }
        }
      }
    }
    .toRegister {
      margin-top: 2rem;
      text-align: center;
      color: rgb(185, 87, 17);
      text-decoration: underline;
    }
  }
}
</style>