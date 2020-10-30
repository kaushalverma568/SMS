<template>
  <div class="notifications">

    <h1>{{ NotificationTitle }}</h1>

    <div class="notifications-list">
      <div class="notifications-list-scroll">
        <div
          class="notification-item"
          v-for="n in 15"
          :key="n"
          :class="{ active: n < 3 }"
        >
          <div class="notification-badge" v-if="n < 3" />
          <div class="notification-content">
            <div class="notification-title">New chat on consultation</div>
            <div class="notificiation-date">June 22, 2020</div>
            <div class="notification-tile" v-if="n > 3 && n < 6">
              <Tile
                image="https://s3-alpha-sig.figma.com/img/d5c0/9066/82ee01370a61811ae4ce76f2b90435df?Expires=1601856000&Signature=dijKk5KfvLq7OVkjAdqt4nYt3KL-eEVoqV7nZURsg570O4qt~UyrTEMiysigHTvKTg5QSDPMslKQjAlE~jujTOvwtMy7Mqe98y5wHwcUdvzSAs8DKDyHjuwfc~Y5iU6VXYuGmLbAQ0nmPz0~9UdYIYw8w7p2vNBkQyBFvpdJIOKBNvosPsiYHecLCcMoa0jvEBqp2dPiIm~N9RyPK7mlDZ0vXDEYKWXHLX3VzABQpMbQpFwfk7SLM3LVdSEpAtt8Iv4Rro6LtIIN09ckjLrgd7tJgtBMpUHuRD0GkEzxf8PFmkMyVGHBt38jg8QvyrcxIrw5yDbkq6xgJDvuAJttcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                height="100px"
              >
                Title video lorem ipsum dolor si…
              </Tile>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Tile from "../atoms/Tile";

export default {
  name: "Notifications",
  data: function () {
    return {
      NotificationTitle: 'Notifications'
    }
  },
  components: {
    Tile,
  },
};
</script>

<style lang="sass" scoped>
.notifications
  background: white
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769)
  border-radius: 0px 0px 26px 26px
  width: 375px
  padding: 26px 0 0 0
  overflow: hidden
  padding-right: 5px
  height: 570px
  h1
    margin: 0
    font-size: 24px
    margin-bottom: 14px
    margin-left: 16px
  .notifications-list
    max-height: 60vh
    overflow-y: scroll
    
  .notification-item
    padding: 12px 16px
    display: flex
    cursor: pointer
    &:hover
      background-color: #fafafa
    .notification-badge
      background: #ed7c16
      height: 6px
      width: 6px
      border-radius: 50%
      margin-right: 9px
      position: relative
      top: 4px
    .notification-content
      width: 100%
    .notification-title
      font-weight: 600
      font-size: 16px
      margin-bottom: 12px
    .notification-date
      font-size: 14px
      opacity: 0.5
    .notification-tile
      width: 100%
      margin-top: 12px



.notifications-list::-webkit-scrollbar
  width: 4px !important
  height: 22px !important

::-webkit-scrollbar 
  display: block
  max-height: 22px !important
  height: 22px !important



::-webkit-scrollbar-thumb 
  max-height: 22px !important
  height: 22px !important
    
</style>