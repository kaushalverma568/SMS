<template>
  <div class="call-modal">
    <div class="caller">
      <div v-if="!video">
        <div class="avatar"></div>
        <div class="call-label">Consultation</div>
        <div class="code">D3-456</div>
      </div>
    </div>

    <div class="video-call-holders" v-if="video">
        <div class="video-in" />
         <div class="video-out" />
    </div>

    <div class="actions">
      <div class="video" @click="handleVideoSwitch">
        <img src="../../assets/video-enable.svg" v-if="video"/>
        <img src="../../assets/video-disable.svg" v-else />
        <div>Video</div>
      </div>
      <div class="speaker" @click="speaker = !speaker">
        <img src="../../assets/speaker-enable.svg" v-if="speaker" />
        <img src="../../assets/speaker-disable.svg" v-else />
        <div>Speaker</div>
      </div>
      <div class="mute" @click="mute = !mute">
        <img src="../../assets/mic-enable.svg" v-if="!mute" />
        <img src="../../assets/mic-disable.svg" v-else />
        <div>Mute</div>
      </div>
    </div>
    <div class="end-call">
      <Button fullWidth big :transparentBlack="!video" :danger="video" @click="handleEndCall">End call</Button>
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button";

export default {
  name: "CallModal",
  components: {
    Button,
  },
  props: {
      video: Boolean
  },
  data () {
      return {
          speaker: false,
          mute: false
      }
  },
  methods: {
      handleEndCall() {
          this.$emit('ended')
      },
      handleVideoSwitch() {
          this.$emit('videoSwitch')
      }
  }
};
</script>

<style lang="scss" scoped>
.call-modal {
  background: #6063eb;
  border-radius: 27px;
  width: 375px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  > * {
      z-index: 1;
  }

  .video-call-holders{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: yellowgreen;
      z-index: 0;

      .video-out {
          position: absolute;
          top: 36px;
          right: 16px;
          width: 120px;
          height: 160px;
          background: #6063EB;
          border-radius: 10px;
      }
  }

  .caller {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: white;
      margin-bottom: 32px;
    }

    .call-label {
      font-size: 20px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    .code {
      font-size: 16px;
      opacity: 0.6;
    }
  }

  .actions {
    display: flex;
    margin-bottom: 40px;
    font-size: 12px;

    > div {
      margin: 0 30px;
      img {
        margin-bottom: 12px;
        cursor: pointer;
        opacity: .8;
        &:hover{
            opacity: 1;
        }
      }
    }
  }

  .end-call {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
  }
}
</style>