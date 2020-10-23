<template>
  <div class="details__vid">
    <div class="details_wrapper_vid">
      <div class="details__video"></div>
      <div class="info__vid">
        <p>Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor…</p>
        <div class="shar_icon_bookmark_vid">
          <div class="share_vid"></div>
          <div class="bookmark_vid"></div>
          <div class="like__vid">18</div>
        </div>
      </div>
      <div class="views_buy_vid">
        <div class="views_vid">
          <p>4.5 <b>.</b> 43 views <b>.</b> <span class="views_vid_date">Jan 2, 2020</span></p>
        </div>
        <div class="buynow">
          <button> <span class="price">$25.30</span> Buy now</button>
        </div>
      </div>
    </div>
    <div class="comment_details_downloads_tabs_vid">
      <v-card>
        <v-tabs
          v-model="tab"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Details
          </v-tab>
          <v-tab href="#tab-2">
            Comment
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
                <a @click="showContent = !showContent">{{showContent ? 'less...' : 'more...'}}</a>
                </v-card-text>
                <div class="owned__vid">
                  <button class="see__all">See all</button>
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
            </v-card>
          </v-tab-item>


          <!-- <v-tab-item
            v-for="i in 3"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card flat>
              <v-card-text>
                {{ text }}
                </v-card-text>
            </v-card>
          </v-tab-item> -->
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur',
        showContent: false
      }
    }
  }
</script>

<style lang="sass" scoped>
  .details__vid
    margin-top: 40px !important
    display: flex
    justify-content: center
    align-items: start
    margin: 0 auto
    width: 811px
    flex-direction: column
    .details_wrapper_vid
      display: flex
      flex-direction: column
      .details__video
        background-image: url('../assets/detail-image.svg')
        width: 811px
        height: 474px
        border-radius: 24px
        position: relative
        cursor: pointer
        &:after
          content: ""
          position: absolute
          top: 50%
          left: 50%
          background-image: url('../assets/play.svg')
          width: 36px
          height: 60px
      .info__vid
        display: flex
        align-items: flex-end
        margin-top: 32px
        p
          font-size: 22px
          font-weight: bold
          color: #000
          width: 535px
        .shar_icon_bookmark_vid
          display: flex
          justify-content: space-around
          width: 275px
          height: 50px
          .share_vid
            background-image: url('../assets/share.svg')
            width: 20px
            height: 21px
          .bookmark_vid
            background-image: url('../assets/bookmark.svg')
            width: 28px
            height: 28px
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

        p
          font-size: 18px
          font-weight: bold
          margin-left: 25px
          position: relative
          &:before
            content: ""
            position: absolute
            top: 2px
            left: -26px
            width: 19px
            height: 19px
            background-image: url('../assets/star.svg')
          b
            color: #a4a5a8
          .views_vid_date
            color: #a4a5a8
        .buynow
          button
            width: 167px
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
            .price
              width: 71px
              height: 32px
              border-radius: 24px
              background: #25282B
              display: block
              line-height: 32px
              margin-right: 18px


.owned__vid
    display: flex
    flex-direction: column
    border: 1px solid #f2f3f5
    border-radius: 23px
    padding: 33px
    position: relative
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

    .wrapper__vid__content
      margin-bottom: 30px
      display: flex
      position: relative
      .dots__vid
        position: absolute
        top: -16px
        right: 0

      .thumb
        background-image: url('../assets/thumb.png')
        width: 222px
        height: 159px
        border-radius: 24px
        @media (max-width: 500px)
          width: 150px
          height: 150px
      .about_vid
        margin-left: 30px
        margin-top: 46px
        .when
          font-size: 14px
          font-weight: bold
          color: #aaad
          border-radius: 14px
          margin-bottom: 9px
          text-align: center
          line-height: 29px
          display: flex
          span
            display: block
            color: #000
            margin-left: 10px
            position: relative
            &:before
             content: ""
             background-image: url('../assets/smplay.svg')
             position: absolute
             top: 7px
             left: -17px
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
          @media (max-width: 500px)
            font-size: 14px
        .views__vid
          font-size: 18px
          font-weight: bold
          color: #000
          position: relative
          margin-left: 20px
          @media (max-width: 500px)
            font-size: 11px
          &:before
            content: ""
            position: absolute
            background-image: url('../assets/star.svg')
            width: 20px
            height: 20px
            top: 2px
            left: -22px
            @media (max-width: 500px)
              top: -4px


.comment_details_downloads_tabs_vid
  width: 100%
  margin-top: 45px



.v-application, .deep-purple.accent-4
  background-color: transparent !important


.v-application, .deep-purple
  background-color: transparent !important

.v-tab.v-tab
  color: #aaad !important


.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none
</style>