<template>
  <div class="request_admin">

  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="475"
      height="767"
    >
      <template v-slot:activator="{ on, attrs }">
        <a
          class="request__link"
          v-bind="attrs"
          v-on="on"
        >
          Request an admin
        </a>
      </template>
      <v-card class="wrapper__card">

        <v-card-title class="headline grey lighten-2">
          <div class="title__first_row">
            <div @click="dialog = false">
              <img :src="close" alt="">
            </div>
            <div class="avatar">
              <div class="img__avatar">
                <img :src="avatar" alt="">
              </div>
              <div class="text_avatar">
                <span class="span__first">seller</span>
                <span class="span__last">Sammy lawson</span>
              </div>

            </div>
          </div>
          <div class="title__secound_row">
              <img :src="Camera" alt="">
              <img :src="Phone" alt="">
          </div>
        </v-card-title>

        <div class="wrapper__start_now">

          <div class="start__now_overlay" v-if="showconversation">
            <div class="wrpper_text_start_now">
              <p class="first_par">Our admin will become the middleman</p>
              <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod.</span>
              <button @click="showConv" class="start___now">Start now</button>
            </div>
          </div>

        <v-card-text class="m__bottom">
          <div class="chat__name">
              <div class="img__avatar">
                <div>A</div>
              </div>
              <div class="text_avatar">
                <span class="span__name">admin</span>
                <span class="span__text">Sammy lawson</span>

              </div>

            </div>
              <div class="chat_conv">
                <div class="img_hold">
                  <img :src="pChat" alt="">
                </div>
                  <div class="text_conv">
                    <p>Title item of lorem ipsum dolor sit amet here</p>
                    <span class="pric">Rp 150.000</span>
                  </div>
                </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="wrapper_start__conv">
          <div class="load__icon__hole">
            <img :src="fileload" alt="">
          </div>
          <div class="hold_input_conv">
            <input type="text" placeholder="Write chat...">
          </div>
          <div class="hold_trigger_conv">
            <img :src="arrowconv" alt="">
          </div>
        </v-card-actions>

        </div>
      </v-card>

    </v-dialog>
  </div>

  </div>

</template>

<script>
import Camera from "../../assets/camera.svg"
import Phone from "../../assets/phone.svg"
import close from "../../assets/close-modal.svg"
import fileload from "../../assets/file-load.svg"
import arrowconv from "../../assets/arrow-conv.svg"
import pChat from "../../assets/product-chat-photo.svg"
import avatar from "../../assets/avatar.svg"


export default {
    data () {
      return {
        dialog: false,
        Camera,
        Phone,
        close,
        fileload,
        arrowconv,
        pChat,
        avatar,
        showconversation: true
      }
    },
    methods: {
      showConv() {
        this.showconversation = false
      }
    },
    computed: function() {
      this.showConv()
    },
  }
</script>

<style lang="sass" scoped>

    .headline
      display: flex
      width: 100%
      background: pink
    .title__first_row
      width: 80%
      display: flex
      padding: 0
      margin: 0
      align-items: center
      div
        cursor: pointer
    .avatar
      display: flex
      .img__avatar
        margin-left: 24px
        cursor: pointer
      .text_avatar
        display: flex
        flex-direction: column
        margin-left: 16px
        .span__first
          font-size: 12px
          font-weight: bold
          margin-bottom: -13px
          color: #868787
        .span__last
          font-size: 16px
          font-weight: bold
          @media (max-width: 767px)
            font-size: 11px
    .title__secound_row
      width: 19%
      display: flex
      justify-content: space-between
      img
        cursor: pointer

    .chat__name
      display: flex
      margin-top: 24px
      .img__avatar

        div
          width: 32px
          height: 32px
          border-radius: 32px
          text-align: center
          line-height: 32px
          background: #fff4eb
          color: #FF9638
      .text_avatar
        display: flex
        flex-direction: column
        margin-left: 24px
        .span__name
          color: #000
          font-size: 16px
          font-weight: bold
        .span__text
          font-size: 14px
          font-weight: normal
  .chat_conv
    width: 330px
    height: 74px
    margin-left: 50px
    margin-top: 20px
    display: flex
    justify-content: space-around
    align-items: center
    border: 1px solid #F2F2F2
    border-radius: 18px
    @media (max-width: 500px)
      width: 100%
      margin-left: 0
    .img_hold
      width: 58px
      height: 58px
      background: #F2F2F2
      border-radius: 14px
      display: flex
      justify-content: center
      align-items: center
    .text_conv
      font-size: 12px
      font-weight: normal
      @media (max-width: 500px)
        padding-left: 20px
    .price
      font-size: 10px
      color: #000
      font-weight: bold

.wrapper_start__conv
  display: flex
  justify-content: space-between
  padding-left: 20px
  padding-right: 20px
  margin-top: 11px
  .load__icon__hole
  .hold_input_conv
    input
      width: 331px
      height: 41px
      border-radius: 15px
      background-color: #f8f8fa
      opacity: 0.4
      outline: none
      border: none
      padding-left: 16px
      @media (max-width: 767px)
        width: 100%
  .hold_trigger_conv
    width: 40px
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    background: #6063EB
    border-radius: 50%
.m__bottom
  margin-bottom: 160px
.wrapper__card
  height: 100%
  display: flex
  flex-direction: column

.request__link
  font-size: 16px
  font-weight: bold
  color: #25282B !important

.v-application p
  @media (max-width: 500px)
    margin-bottom: 0


// .request_admin
//   .v-dialog,
//   .v-dialog--active
//     height: 767px !important
//     background: #000 !important

.wrapper__start_now
  position: relative

  .start__now_overlay
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
    width: 100%
    height: 100%
    z-index: 100

    display: flex
    justify-content: center
    align-items: flex-end
    .wrpper_text_start_now
      margin-bottom: 24px
      text-align: center
      .first_par
        font-size: 16px
        font-weight: bold
      span
        font-size: 14px
        font-weight: normal
        margin-bottom: 37px
        display: block
      button
        width: 427px
        max-width: 427px
        height: 46px
        font-size: 16px
        font-weight: bold
        opacity: .5
        border: 1px solid #25282B
        border-radius: 24px

</style>