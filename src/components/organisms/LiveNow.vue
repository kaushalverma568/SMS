<template>
  <div class="live-now">
    <h1>Live now</h1>
    <router-link to="/live-stream">
      <div class="live-now-content">
        <div class="thumb">
          <Tile
            image="https://s3-alpha-sig.figma.com/img/d5c0/9066/82ee01370a61811ae4ce76f2b90435df?Expires=1601856000&Signature=dijKk5KfvLq7OVkjAdqt4nYt3KL-eEVoqV7nZURsg570O4qt~UyrTEMiysigHTvKTg5QSDPMslKQjAlE~jujTOvwtMy7Mqe98y5wHwcUdvzSAs8DKDyHjuwfc~Y5iU6VXYuGmLbAQ0nmPz0~9UdYIYw8w7p2vNBkQyBFvpdJIOKBNvosPsiYHecLCcMoa0jvEBqp2dPiIm~N9RyPK7mlDZ0vXDEYKWXHLX3VzABQpMbQpFwfk7SLM3LVdSEpAtt8Iv4Rro6LtIIN09ckjLrgd7tJgtBMpUHuRD0GkEzxf8PFmkMyVGHBt38jg8QvyrcxIrw5yDbkq6xgJDvuAJttcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            height="160px"
            centred
          >
            <img src="../../assets/play.svg" class="play-icon" />
          </Tile>
        </div>
        <div class="name">
          <div class="video-tag">
            <Tag>Live now</Tag>
          </div>
          <h2>Title video lorem ipsum dolor sit amet lorem ipsum</h2>
        </div>
        <div class="go-to-video">
          <img src="../../assets/arrow-right-medium.svg" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Tile from "../atoms/Tile";
import Tag from "../atoms/Tag";

export default {
  name: "LiveNow",
  components: {
    Tile,
    Tag,
  },
};
</script>

<style lang="sass" scoped>
.live-now
  h1
    font-weight: 900
    font-size: 24px
    margin: 0 0 21px 0
    @media (max-width: 767px)
      font-size: 18px
      margin-bottom: 8px
  a
    text-decoration: none
  .live-now-content
    border: 1px solid #f0f0f1
    border-radius: 24px
    padding: 20px
    display: flex
    align-items: center
    .thumb
      width: 220px
      margin-right: 24px
    .name
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-self: flex-end
      margin-bottom: 8px
      .video-tag
        margin-bottom: 16px

      h2
        font-weight: 600
        font-size: 20px
        margin: 0
        color: #000
        @media (max-width: 767px)
          font-size: 11px
    .go-to-video
      margin-left: auto
</style>