<template>
  <div class="conversation" :class="{ border, inModal }">
    <Modal v-if="callStarted">
      <CallModal
        @ended="callStarted = false"
        @videoSwitch="handleVideoSwitch"
        :video="videoCallStarted"
      />
    </Modal>
    <div class="conversation-header">
      <div class="conversation-header-col">
        <h1>{{ title || "Consultation" }}</h1>
        <div class="conversation-date">June 22, 2020</div>
      </div>
      <div class="conversation-header-col inline" v-if="!noCalls">
        <img
          @click="
            callStarted = true;
            videoCallStarted = true;
          "
          src="../assets/camera.svg"
        />
        <img
          @click="
            callStarted = true;
            videoCallStarted = false;
          "
          src="../assets/phone.svg"
        />
      </div>
    </div>

    <div class="conversation-list">
      <ConversationMessages />
    </div>

    <div class="conversation-actions" :class="{ active: attachement }">
      <div class="attachemnts" v-if="attachement">
        <div class="attachement-thumb" />
        <div class="attachement-thumb" />
      </div>
      <div class="new-message-actions">
        <a @click="attachement = !attachement" href="#">
          <img src="../assets/attachement.svg" />
        </a>
        <input autofocus />
        <button class="send-btn">
          <img src="../assets/send.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationMessages from "./organisms/ConversationMessages";
import Modal from "./atoms/Modal";
import CallModal from "./organisms/CallModal";

export default {
  name: "Conversation",
  props: {
    border: Boolean,
    inModal: Boolean,
    noCalls: Boolean,
    title: String,
  },
  data() {
    return {
      attachement: false,
      callStarted: false,
      videoCallStarted: false,
    };
  },
  methods: {
    handleVideoSwitch() {
      this.videoCallStarted = !this.videoCallStarted;
    },
  },
  components: {
    ConversationMessages,
    Modal,
    CallModal,
  },
};
</script>

<style lang="sass" scoped>
.conversation
  display: flex
  flex-direction: column
  align-items: center
  border-radius: 24px
  width: 643px
  position: relative
  max-height: calc(100vh - 180px)
  overflow: hidden
  @media (max-width: 1080px)
    width: auto

  &.border
    border: 1px solid #f0f0f1
    margin: 120px 0


  .conversation-list
    height: calc(100vh - 210px)
    padding: 0px 6px 4px 0


  &.inModal
    .conversation-header
      padding-left: 75px



  .conversation-header
    border-bottom: solid 1px #f0f0f1
    box-sizing: border-box
    height: 100px
    width: 100%
    justify-self: flex-start
    display: flex
    align-items: center
    justify-content: space-between
    justify-content: space-between
    padding: 24px

    .conversation-header-col.inline
      @media (max-width: 767px)
        margin-top: -6px
      img
        margin-right: 30px
        cursor: pointer
        opacity: 0.8
        @media (max-width: 767px)
          margin-right: 10px
        &:hover
          opacity: 1

    h1
      font-size: 22px
      font-weight: 600
      margin: 0
      margin-bottom: 12px
      @media(max-width: 767px)
        font-size: 16px
        margin-bottom: 0
      @media (max-width: 300px)
        font-size: 14px
    .conversation-date
      font-size: 16px
      font-weight: 500
      @media(max-width: 767px)
        font-size: 13px
        font-weight: normal



  .conversation-actions
    border-top: solid 1px #f0f0f1
    min-height: 80px
    width: 100%
    position: absolute
    bottom: 0
    left: 0
    display: flex
    padding: 0 20px
    box-sizing: border-box
    flex-direction: column
    transition: all .3s ease-in-out
    // background-color: #fff
    // box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769)
    // border-radius: 18px 18px 0px 0px

    &:hover
      background: #ffffff
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769)
      border-radius: 18px 18px 0px
      transition: all .3s ease-in-out


    .attachemnts
      display: flex

    .attachement-thumb
      background: #dd6633
      height: 230px
      width: 230px
      border-radius: 24px
      margin: 20px 20px 0 0


    .new-message-actions
      width: 100%
      display: flex
      align-items: center
      align-items: center
      height: 80px


    input
      margin: 0 20px
      width: calc(100% - 80px - 24px)
      box-sizing: border-box
      border: none
      border-radius: 20px
      height: 40px
      display: flex
      align-items: center
      background: rgba(70, 71, 119, 0.04)
      color: #1b1d25
      padding: 0 16px
      font-size: 14px

      &:focus
        outline: none



    .send-btn
      background-color: #6063eb
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      width: 40px
      height: 40px
      border: none
      box-shadow: none
      cursor: pointer

      &:focus
        outline: none
</style>