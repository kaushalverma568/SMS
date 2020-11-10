<template>
  <div class="details__vid">
    <div class="details_wrapper_vid">
      <div class="details__video">
        <Media
          class="vid_player"
          :kind="'video'"
          :isMuted="(false)"
          :src="['https://www.w3schools.com/html/mov_bbb.mp4']"
          :autoplay="false"
          :controls="true"
          :loop="true"
          :ref="'fish'"
          :style="{width: '100%', height: '100%'}"
          @pause="handle()"
          disabled="true"
        >
        </Media>
      </div>
      <div class="info__vid">
        <p>Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor…</p>
        <div class="shar_icon_bookmark_vid">
          <Share />
            <button class="bookmark_vid"  @click="saved">
              <svg  class="highlight_bookmark" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9258 3.5H7.05231C6.76559 3.5 6.5332 3.73238 6.5332 4.01911V23.461C6.5326 23.8506 6.75038 24.2075 7.09672 24.3853C7.44326 24.5633 7.86017 24.5323 8.1763 24.3048L13.9891 20.1382L19.8018 24.305C20.1184 24.5317 20.5349 24.5625 20.8812 24.3847C21.2274 24.2069 21.4451 23.8504 21.4451 23.461V4.01911C21.4451 3.73238 21.2125 3.5 20.9258 3.5V3.5Z" stroke="#25282B" stroke-width="2"/>
              </svg>
            </button>
          <div class="like__vid">18</div>
        </div>

      </div>
      <div class="views_buy_vid">
        <div class="views_vid">
          <div class="viewwwws">4.5 <div class="dots_between_review">.</div> 43 views <div class="dots_between_review">.</div> <span class="views_vid_date">Jan 2, 2020</span></div>
        </div>
        <div class="buynow">
          <button> <span class="price">$25.30</span> Buy now</button>
        </div>
      </div>
    <!-- bokmark -->

    <transition name="fade">
      <div class="center__button__bookmark" v-if="bookmarked">
          <button class="video_saved">Added to my videos</button>
      </div>
    </transition>

    </div>

    <div class="comment_details_downloads_tabs_vid">
      <v-card>
        <v-tabs v-model="tab">
          <!-- <v-tabs-slider></v-tabs-slider> -->

          <v-tab href="#tab-1">
            Details
          </v-tab>
          <v-tab href="#tab-2">
            Comments
          </v-tab>
          <v-tab href="#tab-3">
            Downloadbles
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            :value="'tab-1'"
          >
            <v-card>
              <v-card-text>
                {{ text }}
                <div v-if="showContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus impedit vel iste, nesciunt eligendi beatae officiis minus officia recusandae earum repellat sint error est quibusdam mollitia sapiente eum iusto corporis?</div>
                <a @click="showContent = !showContent">{{showContent ? 'less' : 'more...'}}</a>
                </v-card-text>
                <div class="owned__vid owned__vid_borders">
                  <!-- open__dialog__one -->
                    <SellAllpopup
                      title="All Series"
                      tutNumber="Tutorial 1"
                      VideoPlay="this video"
                      />
                  <!-- end diallog -->
                  <div class="wrapper__vid__content" v-for="n in 3" :key="n.id">
                    <div class="thumb" />
                    <div class="about_vid">
                      <div class="when">Tutorial 1 <span>

                        This video</span></div>
                      <div class="title__vid">Title video lorem ipsum dolor sit amet lorem ipsum</div>
                      <span class="views__vid">4.5 <b>.</b> 43 views</span>
                    </div>
                  </div>
              </div>

              <div class="owned__vid">
                <SellAllpopup
                  title="Related videos"
                  tutNumber="Tutorial 1"
                  VideoPlay="this video"
                  />
                <!-- <h2 class="owned_vid_title">
                  Related videos
                </h2>
                  <button class="see__all">See all</button> -->
                  <div class="wrapper__vid__content" v-for="n in 3" :key="n.id">
                    <div class="thumb" />
                    <div class="about_vid">
                      <div class="title__vid">Title video lorem ipsum dolor sit amet lorem ipsum</div>
                      <span class="views__vid">4.5 <b>.</b> 43 views</span>
                    </div>
                  </div>
              </div>
            </v-card>

          </v-tab-item>

          <!-- v-iteme__two -->
          <v-tab-item :value="'tab-2'">
            <v-card>
              <div class="__details">
                <Comment />
              </div>
            </v-card>
          </v-tab-item>

          <v-tab-item :value="'tab-3'">
            <v-card>
              <div>
                <DownloadTab />
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<script>
import Comment from '../components/atoms/Comment'
import DownloadTab from '../components/atoms/downloadTab'
import SellAllpopup from '../components/atoms/SellAll'
import Share from '../components/atoms/Share'
import Media from '@dongido/vue-viaudio'

export default {
    data() {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur',
        showContent: false,
        dialog: false,
        bookmarked: false
      }
    },
    components: {
      Comment,
      DownloadTab,
      SellAllpopup,
      Share,
      Media

    },
    methods: {
      saved () {
        // toggle the visibility of the button__that_told_if_the_item_is_bookmarked_or_not
        this.bookmarked =! this.bookmarked
        // toggle class that add background to svg element
        document.querySelector(".highlight_bookmark").classList.toggle("fill_bookmark");
      }
    }
  }
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
        // background-image: url('../assets/detail-image.svg')
        width: 811px
        // height: 474px
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
        align-items: center
        justify-content: space-between
        margin-top: 32px
        @media (max-width: 767px)
          width: 100%
          flex-direction: column
        p
          font-size: 22px
          font-weight: normal
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
      .views_buy_vid
        display: flex
        justify-content: space-between
        align-items: baseline
        margin-top: 32px

        .viewwwws
          display: flex
          align-items: center
          font-size: 18px
          font-weight: bold
          margin-left: 25px
          position: relative
          @media (max-width: 767px)
            font-size: 11px

          &:before
            content: ""
            position: absolute
            top: 2px
            left: -26px
            width: 19px
            height: 19px
            background-image: url('../assets/star.svg')

          .dots_between_review
            color: #a4a5a8
            padding: 0 5px
            margin-top: -10px
          .views_vid_date
            color: #a4a5a8
        .buynow
          button
            width: 176px
            height: 48px
            border-radius: 24px
            background: #131416
            font-size: 16px
            font-weight: bold
            outline: none
            color: #fff
            display: flex
            justify-content: center
            align-items: center
            @media (max-width: 767px)
              width: 130px
              height:40px
              font-size: 12px
            .price
              width: 71px
              height: 32px
              border-radius: 24px
              background: #25282B
              display: block
              line-height: 32px
              margin-right: 18px
              @media (max-width: 767px)
                width: 60px
                height: 25px
                line-height: 25px
                margin-right: 8px
      .center__button__bookmark
        position: absolute
        bottom: 68px
        left: 305px
        background: #666
        color: #fff
        border-radius: 14px
        .video_saved
          width: 169px
          height: 42px
          font-size: 14px
          font-weight: bold
          outline: none


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
  .__details
    margin-bottom: 50px

.v-application, .deep-purple.accent-4
  background-color: transparent !important


.v-application, .deep-purple
  background-color: transparent !important

.v-tab.v-tab
  color: #aaad
  height: 50px
.v-application .primary--text
  color: #000
  caret-color: #000
.v-tab--active
  color: #000 !important
  border-bottom: 4px solid blue

.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none

.v-tab:before
  background-color: transparent !important

.fade-enter-active,
.fade-leave-active
  transition: opacity .4s ease-in-out

.fade-enter,
.fade-leave-to
   opacity: 0


.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled
  font-weight: normal
</style>