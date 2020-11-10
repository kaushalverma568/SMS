<template>
  <div class="more__pad">
    <v-dialog v-model="dialog" persistent max-width="811">
      <template v-slot:activator="{ on, attrs }">
        <button class="see__all" v-bind="attrs" v-on="on">See all</button>
      </template>

      <v-card class="v_________card">
        <v-card-title class="headline">
          <h5>{{ title }}</h5>
          <button @click="dialog = false">
            <img src="../../assets/close-modal.svg" alt="close-modal" />
          </button>
        </v-card-title>

        <v-card-text class="vidd_wrap">
          <div class="wrapper__vid__content" v-for="n in 50" :key="n.id">

            <div class="fle__to__right">
              <div class="thumb" />
              <div class="about_vid">
                <div class="when">
                  {{ tutNumber }}
                  <span> {{ VideoPlay }} </span>
                </div>
                <div class="title__vid">
                  Title video lorem ipsum dolor sit amet lorem ipsum
                </div>
                <span class="views__vid">4.5 <b>.</b> 43 views</span>
              </div>
            </div>

            <!-- go to video__locked -->

              <div class="fle__to__right">
              <router-link to="/locked-vid-playing">
                  <div class="thumb thumb_blocked" />
              </router-link>
              <div class="about_vid">
                <div class="when add__lock">
                  {{ tutNumber }}
                </div>
                <div class="title__vid">
                  Title video lorem ipsum dolor sit amet lorem ipsum
                </div>
                <span class="views__vid">4.5 <b>.</b> 43 views</span>
              </div>
            </div>


          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    title: String,
    tutNumber: String,
    VideoPlay: String,
  },
};
</script>


<style lang="sass" scoped>
.more__pad
  z-index: 20

  .see__all
    font-size: 16px
    font-weight: bold
    outline: none
    margin-top: 100px
    width: 87px
    height: 34px
    border: 1px solid #F0F0F8
    color: #000
    border-radius: 15px
    position: absolute
    top: -78px
    right: 23px
    cursor: pointer
    z-index: 10
.wrapper__vid__content
  margin-bottom: 30px
  display: flex
  position: relative
  flex-direction: column
  .fle__to__right
    display: flex
    margin-bottom: 30px
  @media (max-width: 767px)
    flex-direction: column
  .dots__vid
    position: absolute
    top: -16px
    right: 0

  .thumb
    background-image: url('../../assets/thumb.png')
    width: 222px
    height: 159px
    border-radius: 24px

    @media (max-width: 767px)
      width: 100%
    &:nth-child(1)
      @media (max-width: 767px)
        margin-top: 36px
  .thumb_blocked
    transition: all .4s ease-in-out
    &:hover
      transform: scale(1.1)
      transition: all .4s ease-in-out
  .about_vid
    margin-left: 30px
    margin-top: 46px
    @media (max-width: 767px)
      margin-left: 0
      margin-top: 30px
    .when
      font-size: 14px
      font-weight: bold
      color: #aaad
      border-radius: 14px
      margin-bottom: 9px
      text-align: center
      line-height: 29px
      display: flex
      @media(max-width: 767px)
        font-size: 12px
        display: flex
        justify-content: space-between
      span
        display: block
        color: #000
        margin-left: 15px
        position: relative
        &:before
          content: ""
          background-image: url('../../assets/smplay.svg')
          position: absolute
          top: 7px
          left: -15px
          width: 14px
          height: 14px
    .add__lock
      position: relative
      &:before
        content: ""
        position: absolute
        top: 7px
        left: -20px
        background-image: url('../../assets/block.svg')
        width: 24px
        height: 24px
    .premium
      display: block
      text-align: center
      line-height: 29px
      background-color: #ED7C16
      width: 85px
      height: 29px
      margin-bottom: 16px
      border-radius: 14px
    .title__vid
      font-size: 20px
      font-weight: bold
      color: #000
      margin-bottom: 8px

      @media (max-width: 767px)
        font-size: 12px
        font-weight: normal
    .views__vid
      font-size: 18px
      font-weight: bold
      color: #000
      position: relative
      margin-left: 20px
      display: block
      @media (max-width: 676px)
        font-size: 12px
      &:before
        content: ""
        position: absolute
        background-image: url('../../assets/star.svg')
        width: 20px
        height: 20px
        top: 2px
        left: -22px
        @media (max-width: 767px)
          top: -2px


.vidd_wrap
  height: calc(100vh - 160px)
  overflow-y: scroll
  width: 784px

  @media (max-width: 992px)
    width: calc(100% - 25px)
.headline
  display: flex
  justify-content: space-between
  button
    outline: none

.v_________card
  // height: calc(100vh - 100px)
  // overflow-y: scroll


::-webkit-scrollbar
  width: 4px
</style>
