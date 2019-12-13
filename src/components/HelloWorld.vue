<template>
  <div class="hello">
    <div class="text-center">
      <div class="text-center-top">
        <mt-field label="用户名" :disableClear="false" placeholder="请输入用户名" v-model="name"></mt-field>
        <mt-field
          label="密码"
          :disableClear="false"
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></mt-field>
      </div>
      <mt-button type="primary" size="small" @click="defaultbtn">default</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Book-Novel",
      toastInstanse: null,
      userInfo: [],
      name: "",
      password: "",
      namestart: false,
      passwordstart: false
    };
  },
  created() {
    this.init();
  },
  watch: {},
  methods: {
    init() {},
    defaultbtn() {
      // 登陆
      if (!this.name || !this.password) {
        let message = "账号密码不能为空";
        this.show(message);
        setTimeout(() => {
          this.toastInstanse.close();
        }, 2000);
      } else if (this.name !== "admin" || this.password !== "9999") {
        let messages = "账号密码不正确";
        this.show(messages);
        setTimeout(() => {
          this.toastInstanse.close();
        }, 2000);
      } else {
        let obj = {
          account: this.name,
          password: this.password
        };
        this.userInfo.push(obj);
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        this.$router.push({ name: "Home" });
      }
    },
    show(val) {
      this.toastInstanse = Toast({
        message: val, //弹窗内容
        position: "middle", //弹窗位置
        duration: -1,
        iconClass: "glyphicon glyphicon-heart",
        className: "mytoast"
      });
    }
  }
};
</script>

<style lang='scss'>
.hello {
  width: 100%;
  text-align: center;
  background-image: url("http://img.zcool.cn/community/01bb8e55efa1fd6ac7251df86c40ed.jpg@2o.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .text-center {
    width: 80%;
    margin-top: 75%;
    display: inline-block;
    .text-center-top {
      margin-bottom: 8%;
      .mint-cell-title {
        width: 220px;
        margin-right: 20px;
      }
      .mint-cell-value {
        border-bottom: 5px solid #cccccc;
        padding: 10px;
      }
      .mint-cell-wrapper {
        background-color: #f4cb00;
        background-image: none;
      }
    }
    .mint-button--small {
      height: 150px;
      width: 50%;
      border-radius: 16px;
    }
  }
}
</style>
