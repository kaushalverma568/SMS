<template>
  <div class="video-preview">
    <div class="video-thumb">
      <img src="../../assets/video-thumb.png" />
      <div class="video-duration">13:24</div>
    </div>
    <div
      class="video-title"
    >Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor…</div>
    <div class="video-infos">
      <div class="views_info">
        <div class="vues-count">
          <img src="../../assets/star.svg" /> 4.5 - 45 views
        </div>
        <div class="video-premiem">Premieum</div>
      </div>
      <Button transparent fullRounded>
        <img src="../../assets/heart.svg" />
        18
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button";

export default {
  name: "VideoPreview",
  components: {
    Button,
  },
};
</script>

<style lang="sass" scoped>
.video-preview
  margin-right: 30px
  .video-thumb
    width: 100%
    height: 228px
    position: relative
    overflow: hidden
    border-radius: 24px
    &::after
      content: ''
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.371722) 100%)
      width: 100%
      height: 100%
      top: 0
      left: 0
      position: absolute
      z-index: 1
    .video-duration
      position: absolute
      left: 20px
      bottom: 20px
      background: rgba(255, 255, 255, 0.3)
      color: white
      padding: 6px 8px
      font-size: 12px
      z-index: 2
    img
      width: 100%
      height: 228px
  .video-title
    font-size: 18px
    font-weight: 600
    margin-top: 20px
    @media (max-width: 769px)
      font-size: 14px
  .video-infos
    margin-top: 24px
    display: flex
    align-items: center
    justify-content: space-between
    @media (max-width: 769px)
      margin-top: 0

    .views_info
      @media (max-width: 767px)
        display: flex
        align-items: center
        .vues-count
          font-size: 10px
          display: flex
          margin-right: 10px
          @media (max-width: 767px)
            img
              height: 13px
        .video-premiem
          padding: 2px 5px
          font-size: 8px

    .vues-count
      font-weight: 600
      margin: 0 8px
      img
        margin-right: 4px
    .video-premiem
      background: rgba(237, 124, 22, 0.3)
      border-radius: 13px
      color: #ed7c16
      font-weight: 600
      padding: 4px 12px
      font-size: 14px
    > div
      display: flex
      align-items: center
      @media (max-width: 769px)

</style>