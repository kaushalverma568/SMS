<template>
  <div class="details__vid">
    <div class="details_wrapper_vid">
      <div class="details__video"></div>
      <div class="info__vid">
        <div class="views_buy_vid">
          <div class="views_vid">
            <p><span class="views_vid_date">Jan 2, 2020</span></p>
          </div>
        </div>

        <div class="hold_content__and__share_bookmark">
          <p>
            Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor…
          </p>
          <div class="shar_icon_bookmark_vid">
            <Share />
            <button class="bookmark_vid" @click="saved">
              <svg
                class="highlight_bookmark"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9258 3.5H7.05231C6.76559 3.5 6.5332 3.73238 6.5332 4.01911V23.461C6.5326 23.8506 6.75038 24.2075 7.09672 24.3853C7.44326 24.5633 7.86017 24.5323 8.1763 24.3048L13.9891 20.1382L19.8018 24.305C20.1184 24.5317 20.5349 24.5625 20.8812 24.3847C21.2274 24.2069 21.4451 23.8504 21.4451 23.461V4.01911C21.4451 3.73238 21.2125 3.5 20.9258 3.5V3.5Z"
                  stroke="#25282B"
                  stroke-width="2"
                />
              </svg>
            </button>
            <div class="like__vid">18</div>
          </div>
        </div>

        <div class="details_about_blog">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidat.
          </p>
        </div>
        <transition name="fade">
          <div class="center__button__bookmark" v-if="bookmarked">
            <button class="video_saved">Added to my Blogs</button>
          </div>
        </transition>
      </div>

      <!-- bokmark -->
    </div>

    <div class="comment_details_downloads_tabs_vid">
      <h4>Comments</h4>
      <!-- Comments-->
      <div>
        <Comment />
      </div>
      <!-- <div class="type__comment">
        <input @click="showConversationArrow" type="text" class="input__type reduce-width" placeholder="Write comment…" />
        <transition name="slide-fade">
           <button v-if="conversation" class="start__convers">
            <img src="../assets/arrow-conversation.svg" alt="">
          </button>
        </transition>
      </div> -->
    </div>
  </div>
</template>

<script>
import Comment from "../components/atoms/Comment";
import Share from "../components/atoms/Share";

export default {
  data() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur",
      showContent: false,
      dialog: false,
      bookmarked: false,
      conversation: false
    };
  },
  components: {
    Comment,
    Share,
  },
  methods: {
    saved() {
      this.bookmarked = !this.bookmarked;
      document.querySelector(".highlight_bookmark").classList.toggle("fill_bookmark");
    },
    // showConversationArrow() {
    //   this.conversation = true;
    // }
  },
  // mounted () {
  //   this.showConversationArrow
  // }
};
</script>

<style lang="sass" scoped>
.details__vid
  margin-top: 50px !important
  display: flex
  justify-content: center
  align-items: start
  margin: 0 auto
  width: 811px
  flex-direction: column
  @media (max-width: 992px)
    width: 100%
  .details_wrapper_vid
    display: flex
    flex-direction: column
    position: relative
    @media (max-width: 992px)
      width: 100%
    .details__video
      background-image: url('../assets/detail-image.svg')
      width: 811px
      height: 474px
      border-radius: 24px
      position: relative
      cursor: pointer
      @media (max-width: 992px)
        width: 100%
        height: 250px
      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        // background-image: url('../assets/play.svg')
        width: 36px
        height: 60px
      .vid_player
        outline: none !important
        border-radius: 20px !important
    .info__vid
      display: flex
      flex-direction: column
      position: relative
      .hold_content__and__share_bookmark
        display: flex
        justify-content: space-between
        align-items: center
        @media (max-width: 767px)
          width: 100%
          flex-direction: column
      p
        font-size: 22px
        font-weight: bold
        color: #000
        width: 535px
        @media (max-width: 767px)
          font-size: 14px
          font-weight: normal
          width: auto
      .shar_icon_bookmark_vid
        display: flex
        justify-content: space-around
        align-items: center
        width: 160px
        height: 50px
        @media (max-width: 767px)
          width: 100%
          justify-content: start

        .bookmark_vid
          // background-image: url('../assets/bookmark.svg')
          // width: 28px
          // height: 28px
          outline: none
          .highlight_bookmark.fill_bookmark
            fill: #000
          @media (max-width: 767px)
            margin-right: 10px
        .like__vid
          background-image: url('../assets/heart.svg')
          width: 61px
          height: 30px
          border: 1px solid #E2E2E4
          border-radius: 15px
          text-align: center
          line-height: 30px
          background-size: 17px 28px
          padding-left: 19px
          background-position-x: 9px
      .details_about_blog
        width: 100%
        margin-top: 15px
        border-bottom: 1px solid #ecedf1


        p
          font-size: 16px
          font-weight: normal
          width: 100%
          @media (max-width: 767px)
            font-size: 15px
            text-align: center
    .views_buy_vid
      display: flex
      justify-content: space-between
      align-items: baseline
      margin-top: 25px

      p
        font-size: 18px
        font-weight: bold
        position: relative

        @media (max-width: 767px)
          font-size: 11px

        b
          color: #a4a5a8
        .views_vid_date
          color: #a4a5a8

    .center__button__bookmark
      position: absolute
      top: 90px
      left: 307px
      background: #666
      color: #fff
      border-radius: 14px
      opacity: .8
      transition: all .3s ease-in-out
      @media (max-width: 767px)
        top: 125px
        left: 162px
      // opacity: .8
      .video_saved
        width: 169px
        height: 42px
        font-size: 14px
        font-weight: bold
        outline: none
        @media (max-width: 767px)
          width: 110px
          height: 35px
          font-size: 11px


.owned__vid
  display: flex
  flex-direction: column
  border-radius: 23px
  padding: 33px
  position: relative
  .owned_vid_title
    font-size: 18px
    margin-bottom: 36px
    font-weight: bold
    color: #000
    @media (max-width: 767px)
      margin-bottom: 0
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
    z-index: 1000

  .wrapper__vid__content
    margin-bottom: 30px
    display: flex
    position: relative
    @media (max-width: 767px)
      flex-direction: column
    .dots__vid
      position: absolute
      top: -16px
      right: 0

    .thumb
      background-image: url('../assets/thumb.png')
      width: 222px
      height: 159px
      border-radius: 24px
      @media (max-width: 767px)
        width: 100%
      &:nth-child(1)
        @media (max-width: 767px)
          margin-top: 36px
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
            background-image: url('../assets/smplay.svg')
            position: absolute
            top: 7px
            left: -15px
            width: 14px
            height: 14px

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
          background-image: url('../assets/star.svg')
          width: 20px
          height: 20px
          top: 2px
          left: -22px
          @media (max-width: 767px)
            top: -2px

// add boder to first section only
.owned__vid_borders
  border: 1px solid #f2f3f5


.comment_details_downloads_tabs_vid
  width: 100%
  margin-top: 45px
  margin-bottom: 50px
  // .type__comment
  //   display: flex
  //   align-items: center
  //   margin-top: 13px
  //   width: 100%
  //   .input__type
  //     width: 100%
  //     height: 48px
  //     outline: none
  //     border-radius: 14px
  //     background: #F4F4F4
  //     padding: 20px
  //     margin-top: 9px
  //     font-size: 16px
  //     font-weight: bold
  //     color: #9d9ea1
  //     &.reduce-width
  //       width: 80%
  //   .start__convers
  //     display: flex
  //     justify-content: center
  //     align-items: center
  //     width: 42px
  //     height:  42px
  //     background: #6063EB
  //     border-radius: 24px
  //     margin-left: 20px
  //     outline: none



.v-application, .deep-purple.accent-4
  background-color: transparent !important


.v-application, .deep-purple
  background-color: transparent !important

.v-tab.v-tab
  color: #aaad !important


.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none


.fade-enter-active,
.fade-leave-active
  transition: all .4s ease-in-out

.fade-enter,
.fade-leave-to
  opacity: .8
  transition: all .3s ease-in-out


// .slide-fade-enter-active
//   transition: all .3s ease

// .slide-fade-leave-active
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

// .slide-fade-enter, .slide-fade-leave-to
//   transform: translateX(10px)
//   opacity: 0


</style>