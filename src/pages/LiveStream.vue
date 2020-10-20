<template>
  <div class="live-stream-wrapper">
    <Modal v-if="conversationModalOpen">
      <ModalContent rounded @close="conversationModalOpen = false">
        <Conversation inModal noCalls title="Private Chat" />
      </ModalContent>
    </Modal>

    <div class="live-stream">
      <header>
        <h1>
          <router-link to="/">
            <img src="../assets/arrow-left-big.svg" />
          </router-link>
          Live Stream
        </h1>
      </header>
      <div class="live-stream-content">
        <div class="live-stream-player">
          <Tile
            image="https://s3-alpha-sig.figma.com/img/d5c0/9066/82ee01370a61811ae4ce76f2b90435df?Expires=1601856000&Signature=dijKk5KfvLq7OVkjAdqt4nYt3KL-eEVoqV7nZURsg570O4qt~UyrTEMiysigHTvKTg5QSDPMslKQjAlE~jujTOvwtMy7Mqe98y5wHwcUdvzSAs8DKDyHjuwfc~Y5iU6VXYuGmLbAQ0nmPz0~9UdYIYw8w7p2vNBkQyBFvpdJIOKBNvosPsiYHecLCcMoa0jvEBqp2dPiIm~N9RyPK7mlDZ0vXDEYKWXHLX3VzABQpMbQpFwfk7SLM3LVdSEpAtt8Iv4Rro6LtIIN09ckjLrgd7tJgtBMpUHuRD0GkEzxf8PFmkMyVGHBt38jg8QvyrcxIrw5yDbkq6xgJDvuAJttcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            height="100%"
            centred
          >
            <img src="../assets/play.svg" class="play-icon" />
          </Tile>
        </div>
        <div class="live-stream-comments">
          <div>
            <header>
              <h2>Comments</h2>
              <img
                class="chat-icon"
                src="../assets/chat-filled.svg"
                @click="conversationModalOpen = true"
              />
            </header>
            <div class="comments-list">
              <div class="comment-item" v-for="n in 5" :key="n">
                <div>
                    <div class="avatar" />
                </div>
                <div class="comment-content">
                  <div class="name-date">
                    <div class="name">Katayama Fumiki</div>
                    <div class="date">- 4:40 PM</div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adips elit, sed do
                    eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="new-message-actions">
            <Input placeholder="Write comment" />
            <button class="send-btn">
              <img src="../assets/send.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from "../components/atoms/Tile";
import Input from "../components/atoms/Input";
import Modal from "../components/atoms/Modal";
import ModalContent from "../components/atoms/ModalContent";
import Conversation from "../components/Conversation";

export default {
  name: "LiveStream",
  components: {
    Tile,
    Input,
    Modal,
    ModalContent,
    Conversation,
  },
  data() {
    return {
      conversationModalOpen: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.live-stream-wrapper
  padding: 120px 0
  display: flex
  justify-content: center

  .live-stream
    header
      margin-bottom: 24px
      h1
        font-size: 30px
        font-weight: bold
        margin: 0

  .live-stream-content
    display: flex
    border: 1px solid #f0f0f1
    border-radius: 20px
    overflow: hidden
    min-height: calc(100vh - 240px)
    @media (max-width: 992px)
      flex-direction: column
    .live-stream-player
      width: 300px
      @media (max-width: 992px)
        width: 100%
        height: 250px

  .live-stream-comments
    display: flex
    flex-direction: column
    justify-content: space-between
    header
      display: flex
      justify-content: space-between
      margin-bottom: 24px
      padding: 30px 30px 0 30px

      h2
        font-size: 18px
        margin: 0
        color: #25282b

      .chat-icon
        cursor: pointer

  .comments-list
    padding: 0 30px
    @media (max-width: 500px)
      padding: 0 10px

  .comment-item
    margin-bottom: 24px
    display: flex
    max-width: 343px
    margin-right: 100px
    @media (max-width: 500px)
      width: 100%
    .avatar
      height: 38px
      width: 38px
      background: #6063eb
      border-radius: 50%
      margin-right: 16px

    .name-date
      display: flex
      margin-bottom: 8px

      .name
        font-size: 14px
        font-weight: bold
        margin-right: 8px
        @media (max-width: 500px)
          font-size: 11px


      .date
        opacity: 0.5
        font-size: 14px

    p
      font-size: 14px
      font-weight: bold
      margin: 0
      @media (max-width: 500px)
        font-size: 11px
        font-weight: normal

  .new-message-actions
    width: 100%
    display: flex
    align-items: center
    align-items: center
    height: 80px
    border-top: solid 1px #f0f0f1
    padding: 0 30px
    box-sizing: border-box

    .input
      flex: 1

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
      margin-left: 20px
      &:focus
        outline: none
</style>