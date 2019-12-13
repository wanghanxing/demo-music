<template>
  <div class="home">
    <div class="home-title">
      <h2>-Music-</h2>
    </div>
    <div class="home-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img
            src="http://hbimg.b0.upaiyun.com/d4b59c62e7158786b426d87d15a2621604177fdb33883-FphnVS_fw658"
            alt
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="http://n.sinaimg.cn/sinacn11/200/w1080h720/20180321/d450-fyskeue0732238.jpg"
            alt
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://imgup02.iefans.net/iefans/2018-09/18/16/15372590698483_0.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="home-rouders">
      <span class="animation-router"></span>
      <span class="animation-router"></span>
      <span class="animation-router"></span>
      <span class="animation-router"></span>
    </div>
    <div class="scoll-bottom">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20"
      >
        <li v-for="(item,index) in list" :key="index">
          <img :src="item" alt />
          <span>阿萨德完全恶趣味去恶sad生产自行车自行车自行趣味axczxcasdas呃呃</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538687708&di=de62ba82e329db073b4959173b694205&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67ca39d369a193fc803ff759ec72d5291e874ea850f39-vHymFh_fw658",
        "http://n.sinaimg.cn/sinacn11/200/w1080h720/20180321/d450-fyskeue0732238.jpg",
        "http://hbimg.b0.upaiyun.com/d4b59c62e7158786b426d87d15a2621604177fdb33883-FphnVS_fw658",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538668074&di=716fe650febe38bfed28d70c45872115&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F09%2F20180209104250_CeziB.thumb.700_0.png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538740268&di=ffeb7d804211a0e3a77279437a0afea0&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FksWcAdkg_Utx4FRJcX4fjQ%3D%3D%2F109951163963847183.jpg"
      ]
    };
  },
  mounted() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 5; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style lang='scss'>
.home {
  height: 100%;
  background-color: #000000;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575537849444&di=a39e1da0168767aafc0a918c2a50aac2&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2Fb66f7a21gw1fa9de02hw5j21hc0u0drw.jpg");
  background-size: 100% 100%;
  .home-title {
    width: 100%;
    height: 200px;
    h2 {
      margin: 0;
      padding: 0;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      text-align: center;
      z-index: 9999;
      background-color: #ce284a;
      border-bottom: 2px solid #5f3600;
    }
  }
  .home-swipe {
    width: 100%;
    height: 1000px;
    img {
      width: 100%;
    }
  }
  .home-rouders {
    width: 100%;
    height: 500px;
    border-top: 1px solid #5f3600;
    border-bottom: 1px solid #5f3600;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      display: inline-block;
      width: 400px;
      height: 400px;
      margin: 0 30px;
      border: 5px solid #000000;
      margin-top: 50px;
      text-align: center;
      // border-radius: 50%;
      line-height: 250px;
      box-shadow: 5px 5px 50px #000000;
      font-weight: 700;
    }
    span:nth-child(1) {
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538668074&di=716fe650febe38bfed28d70c45872115&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F09%2F20180209104250_CeziB.thumb.700_0.png");
      background-size: 100% 100%;
    }
    span:nth-child(2) {
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538687708&di=de62ba82e329db073b4959173b694205&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67ca39d369a193fc803ff759ec72d5291e874ea850f39-vHymFh_fw658");
      background-size: 100% 100%;
    }
    span:nth-child(3) {
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538724894&di=d5888155c8fad0c39b081fc0b9645627&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9715543459127dbc1679faaad8241ac44a1ae9a7115ae-AlZqFW_fw658");
      background-size: 100% 100%;
    }
    span:nth-child(4) {
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538740268&di=ffeb7d804211a0e3a77279437a0afea0&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FksWcAdkg_Utx4FRJcX4fjQ%3D%3D%2F109951163963847183.jpg");
      background-size: 100% 100%;
    }
  }
  .scoll-bottom {
    height: 50%;
    overflow-y: auto;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        width: 100%;
        height: 500px;
        border-bottom: 1px solid #000000;
        background-color: rgba(255, 255, 255, 0.3);
        margin-bottom: 30px;
        display: flex;
        img {
          height: 90%;
          width: 30%;
          padding: 30px;
        }
      }
    }
  }
}
</style>