<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="475"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="action" v-bind="attrs"
          v-on="on">

            <img
            class="chat-icon"
            src="../../assets/chat-filled.svg"
            />
          </div>
      </template>

      <v-card class="wrapper__card">

        <v-card-title class="headline grey lighten-2">
          <div class="title__first_row">
            <div @click="dialog = false">
              <img :src="close" alt="">
            </div>
            <div class="avatar">
              <!-- <div class="img__avatar">
                <img :src="avatar" alt="">
              </div> -->
              <div class="text_avatar">
                <span class="span__last">Your request</span>

                <span class="span__first">lorem ipsum lorem lorem</span>
              </div>

            </div>
          </div>
          <div class="title__secound_row">
              <img :src="Camera" alt="">
              <img :src="Phone" alt="">
          </div>
        </v-card-title>

        <div class="wrap__message">
          <!-- <p>lorem</p> -->
          <!-- <div class="chat__name">
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
                </div> -->
        </div>
          <v-divider></v-divider>

        <v-card-actions class="wrapper_start__conv" :class="{ active: attachement }">
           <div class="attachemnts" v-if="attachement">
            <div class="attachement-thumb" />
            <div class="attachement-thumb" />
          </div>
          <div class="load__icon__hole">
            <!-- <img :src="fileload" alt=""> -->
            <a @click="attachement = !attachement" href="#">
              <img src="../../assets/attachement.svg" />
            </a>
          </div>
          <div class="hold_input_conv">
            <input type="text" placeholder="Write chat...">
          </div>
          <div class="hold_trigger_conv">
            <img :src="arrowconv" alt="">
          </div>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </div>
</template>


<script>
import Chat from "../../assets/chat-prod.svg"
import Camera from "../../assets/camera.svg"
import Phone from "../../assets/phone.svg"
import close from "../../assets/close-modal.svg"
import avatar from "../../assets/avatar.svg"
import pChat from "../../assets/product-chat-photo.svg"
import arrowconv from "../../assets/arrow-conv.svg"
import fileload from "../../assets/file-load.svg"
export default {
    data () {
      return {
        dialog: false,
        Chat: Chat,
        Camera,
        Phone,
        close,
        avatar,
        pChat,
        fileload,
        arrowconv,
        attachement: false,
      }
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
      align-items: flex-end
      .img__avatar
        margin-left: 24px
        cursor: pointer
      .text_avatar
        display: flex
        flex-direction: column
        margin-left: 16px
        .span__first
          font-size: 16px
          font-weight: bold
          margin-bottom: -6px
          color: #868787
        .span__last
          font-size: 26px
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
.wrap__message
  height: 300px
  margin-bottom: 160px
.wrapper__card
  height: 100%
  display: flex
  flex-direction: column
.v-application p
  @media (max-width: 500px)
    margin-bottom: 0

.v-dialog, .v-dialog--active
  height: 767px !important


.load__icon__hole
  // width: 100%
  display: flex
  align-items: center
  align-items: center
  height: 80px


.attachemnts
  display: flex
  position: absolute
  bottom: 130px

.attachement-thumb
  background: #dd6633
  height: 200px
  width: 200px
  border-radius: 24px
  margin: 20px 20px 0 0
</style>