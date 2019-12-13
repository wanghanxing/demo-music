<template>
  <div class="di main-wrap" v-loading="audio.waiting">
    <audio
      ref="audio"
      class="dn"
      :src="url"
      :preload="audio.preload"
      @play="onPlay"
      @error="onError"
      @waiting="onWaiting"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
    ></audio>
    <div class="audio_progress">
      <!-- 进度条 -->
      <mt-progress :value="sliderTime" :bar-height="3"></mt-progress>
      <!-- 开始时间 -->
      <span>{{ audio.currentTime | formatSecond}}</span>
      <!-- 播放按钮 -->
      <!-- <span @click="startPlayOrPause">{{audio.playing | transPlayPause}}</span> -->
      <!-- 快进按钮 -->
      <!-- <span @click="changeSpeed">{{audio.speed | transSpeed}}</span> -->
      <!-- 静音按钮 -->
      <!-- <span @click="startMutedOrNot">{{audio.muted | transMutedOrNot}}</span> -->
      <!-- 结束时间 -->
      <span>{{ audio.maxTime | formatSecond }}</span>
    </div>
  </div>
</template>
<script>
import store from "../vuex/store";
// 处理时间
function realFormatSecond(second) {
  let secondType = typeof second;
  if (secondType === "number" || secondType === "string") {
    second = parseInt(second);
    let hours = Math.floor(second / 3600);
    second = second - hours * 3600;
    let mimute = Math.floor(second / 60);
    second = second - mimute * 60;
    return (
      hours + ":" + ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2)
    );
  } else {
    return "0:00:00";
  }
}
export default {
  props: {
    // newTheUrls: {
    //   type: String,
    //   required: true
    // },
    theSpeeds: {
      type: Array,
      default() {
        return [1, 1.5, 2];
      }
    },
    theControlList: {
      type: String,
      default: ""
    }
  },
  name: "audio-muc",
  data() {
    return {
      url: this.theUrl || "http://sc1.111ttt.cn/2016/1/06/01/199011722375.mp3",
      value1: 0,
      audio: {
        currentTime: 0,
        maxTime: 0,
        playing: false,
        muted: false,
        speed: 1,
        waiting: true,
        preload: "auto"
      },
      sliderTime: 0,
      speeds: this.theSpeeds
    };
  },
  store: store,
  created() {},
  watch: {
    ids(val) {
      if (val % 2 === 1) {
        this.startPlay();
      } else {
        this.pausePlay();
      }
    }
  },
  computed: {
    ids() {
      return this.$store.state.value;
    }
  },
  methods: {
    // 快进按钮change
    changeSpeed() {
      let index = this.speeds.indexOf(this.audio.speed) + 1;
      this.audio.speed = this.speeds[index % this.speeds.length];
      this.$refs.audio.playbackRate = this.audio.speed;
    },
    // 静音按钮change
    startMutedOrNot() {
      this.$refs.audio.muted = !this.$refs.audio.muted;
      this.audio.muted = this.$refs.audio.muted;
    },
    // 播放按钮
    startPlayOrPause() {
      return this.audio.playing ? this.pausePlay() : this.startPlay();
    },
    // 开始播放
    startPlay() {
      this.$refs.audio.play();
    },
    // 暂停
    pausePlay() {
      this.$refs.audio.pause();
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    // 当发生错误, 就出现loading状态
    onError() {
      this.audio.waiting = true;
    },
    // 当音频开始等待
    onWaiting(res) {
      console.log(res);
    },
    // 当音频开始播放
    onPlay(res) {
      console.log(res);
      this.audio.playing = true;
      this.audio.loading = false;
      let target = res.target;
      let audios = document.getElementsByTagName("audio");
      [...audios].forEach(item => {
        if (item !== target) {
          item.pause();
        }
      });
    },
    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      this.audio.currentTime = res.target.currentTime;
      this.sliderTime = parseInt(
        (this.audio.currentTime / this.audio.maxTime) * 100
      );
    },
    // 当加载语音流元数据完成后，会触发该事件的回调函数
    // 语音元数据主要是语音的长度之类的数据
    onLoadedmetadata(res) {
      console.log(res);
      this.audio.waiting = false;
      this.audio.maxTime = parseInt(res.target.duration);
    }
  },
  filters: {
    formatSecond(second = 0) {
      return realFormatSecond(second);
    },
    transPlayPause(value) {
      return value ? "暂停" : "播放";
    },
    transMutedOrNot(value) {
      return value ? "放音" : "静音";
    },
    transSpeed(value) {
      return "快进: x" + value;
    }
  }
};
</script>
<style lang='scss' scoped>
.main-wrap {
  padding: 10px 15px;
}
.di {
  display: inline-block;
}
.dn {
  display: none;
}
.audio_progress {
  span {
    font-size: 50px;
    padding: 0 300px;
  }
}
.mt-progress {
  width: 1500px;
  opacity: 0.5;
}
</style>
