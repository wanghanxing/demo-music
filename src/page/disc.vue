<template>
  <div class="disc">
    <div class="disc_title">
      <div class="disc_title-box">
        <i class="iconfont icon-xihuan"></i>
        <span>大鱼海棠</span>
      </div>
    </div>
    <div id="h_center1" class="disc_center_title">
      <span>当前播放：</span>
      <span>大鱼海棠</span>
    </div>
    <div class="disc_src" v-if="iconfontthree%2===1">
      <span @click="iconopen" :class="{'animation-router':anmitiondisc%2===1}">
        <i class="iconfont icon-b-" v-if="anmitiondisc%2!==1"></i>
      </span>
    </div>
    <div class="disc_center" v-if="iconfontthree%2!==1">
      <textarea id="lrc_content" name="textfield" cols="70" rows="10" style="display:none;">
        [ti:大鱼]
        [ar:王若伊]
        [al:大鱼]
        [ly:尹约]
        [mu:钱雷]
        [ma:]
        [pu:]
        [by:ttpod]
        [total:278752]
        [offset:0]
        [00:00.410]大鱼 - 王若伊
        [00:01.410]作词：尹约
        [00:02.310]作曲：钱雷
        [00:03.161]
        [00:44.447]海浪无声将夜幕深深淹没
        [00:51.200]漫过天空尽头的角落
        [00:57.995]大鱼在梦境的缝隙里游过
        [01:04.848]凝望你沉睡的轮廓
        [01:10.898]看海天一色 听风起雨落
        [01:17.705]执子手吹散苍茫茫烟波
        [01:24.506]大鱼的翅膀 已经太辽阔
        [01:32.112]我松开时间的绳索
        [01:38.017]怕你飞远去
        [01:41.620]怕你离我而去
        [01:45.173]更怕你永远停留在这里
        [01:51.876]每一滴泪水
        [01:55.428]都向你流淌去
        [01:59.623]倒流进天空的海底
        [02:05.201]
        [02:20.568]海浪无声将夜幕深深淹没
        [02:27.118]漫过天空尽头的角落
        [02:34.029]大鱼在梦境的缝隙里游过
        [02:40.733]凝望你沉睡的轮廓
        [02:47.051]看海天一色 听风起雨落
        [02:53.654]执子手吹散苍茫茫烟波
        [03:00.637]大鱼的翅膀 已经太辽阔
        [03:08.087]我松开时间的绳索
        [03:14.187]看你飞远去 看你离我而去
        [03:21.039]原来你生来就属于天际
        [03:27.889]每一滴泪水 都向你流淌去
        [03:35.540]倒流回最初的相遇
       </textarea>
      <ul
        id="text"
        ref="text"
        :style="{transform:'translateY('+'-'+tranformY+'px'+')'}"
        :class="{'disc_center_scoll':startPlay%2===1}"
      >
        <li style="list-style: none;" v-for="(item,index) in medisArray" :key="index">{{item.c}}</li>
      </ul>
    </div>
    <div class="disc_bottom">
      <span>
        <i class="iconfont icon-xihuan"></i>
      </span>
      <span>
        <i class="iconfont icon-b-2"></i>
      </span>
      <span @click="iconfontree">
        <i class="iconfont icon-b-1"></i>
      </span>
      <span>
        <i class="iconfont icon-b-5"></i>
      </span>
    </div>
    <div class="disc_progress">
      <audio-muc></audio-muc>
    </div>
  </div>
</template>

<script>
import store from "../vuex/store";

import audioMuc from "../components/audio-muc";
export default {
  name: "disc",
  components: { audioMuc },

  data() {
    return {
      medisArray: [],
      startPlay: 0,
      anmitiondisc: 0,
      aaa: 0,
      icondix: 0,
      iconfontthree: 0,
      tranformY: 0
    };
  },
  store: store,
  created() {},
  mounted() {
    this.audiotimeUpdate();
  },
  watch: {
    ids(val) {
      this.$set(this, "startPlay", val);
      if (val) {
        this.$set(
          this,
          "tranformY",
          this.$refs.text.getBoundingClientRect().y / 30
        );
      }
    }
  },
  computed: {
    ids() {
      return this.$store.state.value;
    }
  },
  methods: {
    // 处理歌词数据
    audiotimeUpdate() {
      let that = this;
      function createLrc() {
        let medis = document.getElementById("lrc_content").innerText;
        let medises = medis.split("\n");
        [].forEach.call(medises, item => {
          let t = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
          that.medisArray.push({
            t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
            c: item.substring(item.indexOf("]") + 1, item.length)
          });
        });
      }
      createLrc();
    },
    // change播放
    iconfontree() {
      this.aaa += 1;
      this.$set(this, "iconfontthree", this.aaa);
    },
    iconopen() {
      this.icondix += 1;
      this.$set(this, "anmitiondisc", this.icondix);
    }
  }
};
</script>

<style lang='scss'>
.disc {
  width: 100%;
  height: 100%;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575539508927&di=bfad9ff6f2d7e28f03e415937edb1e4e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F14%2F20190114230100_hCcG5.jpeg");
  // background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575550455109&di=4fa7802c8cd8263a381fbdafb4c04925&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0116a0578dc31f0000012e7e2e3dfb.jpg%401280w_1l_2o_100sh.jpg");
  background-size: 100% 100%;
  .disc_title {
    width: 100%;
    height: 200px;
    position: fixed;
    top: 50px;
    left: 0;
    background-color: #cccccc;
    opacity: 0.5;
    .disc_title-box {
      height: 100%;
      line-height: 200px;
    }
  }
  .disc_center_title {
    text-align: center;
    position: relative;
    top: 350px;
    color: #000;
  }
  .disc_src {
    span {
      width: 1200px;
      height: 1200px;
      border: 1px solid #666;
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538994661&di=f460b7a091d929629cd9aa0f3167128e&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1140025960%2C1957178447%26fm%3D214%26gp%3D0.jpg");
      background-size: 100% 100%;
      border-radius: 50%;
      position: absolute;
      top: 20%;
      left: 20%;
      text-align: center;
      line-height: 1200px;
      i {
        color: #ccc;
        font-size: 200px;
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
  .disc_center {
    width: 100%;
    height: 60%;
    margin-top: 500px;
    overflow-y: auto;
    text-align: center;
    color: #000;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }
  .disc_center_scoll {
    animation: myMove 307s linear infinite;
    animation-fill-mode: forwards;
  }
  @keyframes myMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-3800px);
    }
  }
  .disc_bottom {
    width: 100%;
    display: flex;
    position: fixed;
    top: 79%;
    span {
      flex: 1;
      text-align: center;
      i {
        font-size: 150px;
      }
    }
  }
  .disc_progress {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    position: fixed;
    top: 83%;
  }
}
</style>