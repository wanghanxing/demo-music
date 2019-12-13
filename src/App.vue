<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view ref="page"></router-view>
    </keep-alive>
    <div class="footer" v-if="$router.currentRoute.name!=='HelloWorld'">
      <p-footer></p-footer>
    </div>
  </div>
</template>

<script>
import pFooter from "./components/p-footer";
export default {
  name: "App",
  components: { pFooter },
  created() {
    this.init();
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("userInfo"))) {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.hello {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.footer {
  background-color: #ce274a;
  border-top: 1px solid #5f3600;
  display: block;
  width: 100%;
  height: 250px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
