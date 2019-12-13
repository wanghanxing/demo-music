<template>
  <div class="p_footer">
    <span @click="spanlast">
      <i class="iconfont icon-shouye"></i>
    </span>
    <span @click="classification">
      <i class="iconfont icon-kapianshipailie"></i>
    </span>
    <span @click="disc">
      <span class="disc" :class="{'animation-router':anmitiondisc%2===1}">
        <i class="iconfont icon-b-" v-if="anmitiondisc%2!==1"></i>
      </span>
    </span>
    <span @click="spanmybook">
      <i class="iconfont icon-gouwuche"></i>
    </span>
    <span @click="shoppingCart">
      <i class="iconfont icon-shezhi"></i>
    </span>
  </div>
</template>

<script>
import store from "../vuex/store";
export default {
  name: "p-footer",
  data() {
    return {
      anmitiondisc: 0,
      aaa: 0
    };
  },
  store: store,
  methods: {
    spanlast() {
      this.$router.push({ name: "Home" });
    },
    spanmybook() {
      this.$router.push({ name: "mybook" });
    },
    disc() {
      this.aaa += 1;
      this.$set(this, "anmitiondisc", this.aaa);
      this.$router.push({ name: "disc" });
      this.$store.commit("changeValue", this.anmitiondisc);
    },
    classification() {
      this.$router.push({ name: "classification" });
    },
    shoppingCart() {
      this.$router.push({ name: "shopping-cart" });
    }
  }
};
</script>

<style lang='scss'>
.p_footer {
  display: flex;
  font-size: 12px;
  span {
    flex: 1;
    text-align: center;
    padding: 10px;
    .iconfont {
      font-size: 200px;
      display: block;
    }
  }
  span:nth-child(3) {
    position: relative;

    .disc {
      display: inline-block;
      width: 350px;
      height: 350px;
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538994661&di=f460b7a091d929629cd9aa0f3167128e&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1140025960%2C1957178447%26fm%3D214%26gp%3D0.jpg");
      background-size: 100% 100%;
      border-radius: 50%;
      position: relative;
      top: -150px;
      border: 5px solid #000000;
      box-shadow: 10px 10px 50px #000000;
      line-height: 350px;
      text-align: center;
      i {
        z-index: 9999;
        font-size: 120px;
        color: #cccccc;
        opacity: 0.7;
      }
    }
  }
  .animation-router {
    animation: router 5.5s linear infinite;
  }
  @keyframes router {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
</style>