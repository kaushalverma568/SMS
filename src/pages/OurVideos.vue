<template>
  <div class="exlusive-items-wrapper">
    <div class="exlusive-items">
      <header class="page-header">
        <h1>{{ title }}</h1>
        <!-- <SellItem /> -->
        <router-link to="">
          <div class="sell-btn">
            <span>
              <svg
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
            </span>
          </div>
        </router-link>
      </header>

      <div class="exlusive-items-content">
        <div class="categories-wrapper">
          <div class="categories">
            <!-- category-checkList here -->
            <h2>Categories</h2>
            <div class="row" v-for="n in 6" :key="n.id">
              <v-checkbox
                class="customize--checkbox"
                label="Category name here"
              >
              </v-checkbox>
            </div>
          </div>
        </div>

        <div class="items-list-wrapper">
          <header class="search__checklist">
            <SearchInput />
            <div>
              <DropdownButton
                big
                transparent
                dropdown
                @change="handleSortChange"
                :label="selectedSort.value"
                :options="sortOptions"
                :selected="selectedSort"
              >
              </DropdownButton>
            </div>
          </header>
          <!-- upcoming__videos -->
          <div class="upcoming">
            <h3 class="video_title_upcoming">Upcoming lives</h3>
            <!-- dialooo -->
            <v-dialog v-model="dialog" persistent max-width="475" class="v__dialog">

              <template v-slot:activator="{ on, attrs }">
                <div class="upcoming_video_wrap" v-bind="attrs" v-on="on">
                  <div v-for="vid in 3" :key="vid.id" class="upcoming_vid">
                    <div class="video__content">
                      <h5>Title video lorem dol…</h5>
                      <div class="video__date">
                        <span>August 29th</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <v-card class="card__wrapper">
                <a @click="dialog = false">
                  <img :src="close" alt="">
                </a>
                <v-card-text class="wrapper__upcoming__video__popup">
                  <div class="wrap_img">

                  </div>
                  <h4>Live video title here</h4>
                  <p>Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor More…</p>
                  <span>22 June 2020, 15:30</span>
                  <button>Buy video/series</button>
                </v-card-text>
              </v-card>
            </v-dialog>
            <!-- end dialoog -->
          </div>

          <!-- end upcoming__videos -->
          <content>
            <div class="video-preview">
              <div class="video-thumb">
                <img src="../assets/video-thumb.png" />
                <div class="video-duration">13:24</div>
              </div>
              <div class="video-title">{{ VideoTitle }}</div>
              <div class="video-infos">
                <div class="views_info">
                  <div class="vues-count">
                    <img src="../assets/star.svg" /> 4.5 - 45 views
                  </div>
                  <div class="video-premiem">Premieum</div>
                </div>
                <Button transparent fullRounded>
                  <img src="../assets/heart.svg" />
                  18
                </Button>
              </div>
            </div>

            <div class="video-preview">
              <div class="video-thumb">
                <img src="../assets/video-thumb.png" />
                <div class="video-duration">13:24</div>
              </div>
              <div class="video-title">{{ VideoTitle }}</div>
              <div class="video-infos">
                <div class="views_info">
                  <div class="vues-count">
                    <img src="../assets/star.svg" /> 4.5 - 45 views
                  </div>
                  <div class="video-premiem">Premieum</div>
                </div>
                <Button transparent fullRounded>
                  <img src="../assets/heart.svg" />
                  18
                </Button>
              </div>
            </div>
          </content>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/atoms/SearchInput";
import DropdownButton from "../components/atoms/DropdownButton";
import Pagination from "../components/atoms/Pagination";
import arrow from "../assets/option-checked.svg";
import close from "../assets/close-modal.svg";

// import bookmark from '../assets/bookmark.svg'

export default {
  name: "ExlusiveItems",
  data() {
    return {
      arrow: arrow,
      title: "Our videos",
      VideoTitle:
        "Title video lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor…",
      dialog: false,
      close,
      sortOptions: [
        {
          label: "Newest",
          value: "Newset",
        },
        {
          label: "Oldest",
          value: "oldest",
        },
        {
          label: "Descending",
          value: "Descending",
        },
        {
          label: "Ascending",
          value: "Ascending",
        },
        {
          label: "Hightst price",
          value: "Hightst price",
        },
        {
          label: "Lowest price",
          value: "Lowest price",
        },
      ],
      selectedSort: {
        label: "Sellect Item",
        value: "Sellect Item",
      },
    };
  },
  components: {
    SearchInput,
    DropdownButton,
    Pagination,
  },
  methods: {
    handleSortChange(option) {
      this.selectedSort = option;
    },
  },
};
</script>

<style lang="sass" scoped>

.exlusive-items-wrapper
  padding: 120px 0
  display: flex
  justify-content: center
  .exlusive-items
    width: 979px
    max-width: 100%
  .page-header
    margin-bottom: 30px
    display: flex
    justify-content: space-between
    align-items: center
    h1
      font-size: 30px
      margin: 0
      @media (max-width: 767px)
        font-size: 22px
      @media (max-width: 400px)
        font-size: 16px
    .sell-btn
      width: 137px
      text-align: right
      @media (max-width: 400px)
        width: 70px
        .fullWidth
          height: 30px
.exlusive-items-content
  display: flex
  .categories-wrapper
    @media (max-width: 992px)
      display: none
    .categories
      border: 1px solid #f0f0f1
      border-radius: 24px
      padding: 24px
      width: 306px
      box-sizing: border-box
      margin-right: 30px
      .customize--checkbox
        color: #131416
        font-size: 16px
        font-weight: bold

    h2
      font-size: 18px
      margin: 0 0 20px 0
    .row
      display: flex
      margin-bottom: 24px
      .category-name
        margin-left: 14px
  .items-list-wrapper
    flex: 1
    .search__checklist
      display: flex
      @media (max-width: 992px)
        flex-direction: column
        .dropdown-button
          width: auto !important
          margin-bottom: 25px
      .search
        margin-right: 30px

      .dropdown-button
        width: 222px
    content
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        @media (max-width: 400px)
          justify-content: center
        a
          text-decoration: none
        .item
          margin: 0
          margin-bottom: 40px
          width: 307px
          position: relative
          @media (max-width: 400px)
            width: auto
        .re_position
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
        .thumb
          background: #f2f2f2
          border-radius: 24px
          height: 307px
          width: 307px
          margin-bottom: 26px
          display: flex
          align-items: center
          box-sizing: border-box
          padding: 10px
          @media (max-width: 767px)
            width: 250px
            height: 200px
          img
            width: 100%
            height: 250px
            border-radius: 25px
        .title_product
          font-size: 18px
          margin: 0 0 20px 0
          color: black
          @media (max-width: 767px)
            font-size: 14px

        .item-price
          font-weight: 600
          font-size: 22px
          color: #000
          @media (max-width: 767px)
            font-size: 16px

  .upcoming
    display: flex
    flex-direction: column
    margin-top: 34px
    margin-bottom: 34px
    .upcoming_video_wrap
      display: flex
      @media (max-width: 1200px)
        flex-wrap: wrap
        margin-top: 20px
    .upcoming_vid
      width: 228px
      height: 128px
      background-image: url('https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg')
      // background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.371722) 100%)
      border-radius: 24px
      display: flex
      justify-content: center
      align-items: center
      margin-right: 20px
      margin-top: 20px
      @media (max-width: 767px)
        width: 100%
        height: 150px
      .video__content
        h5
          font-size: 14px
          font-weight: bold
          color: #fff
        .video__date
          position: relative
          font-weight: bold
          width: 98px
          height: 27px
          display: block
          text-align: center
          line-height: 27px
          margin-top: 17px
          &:before
            content: ''
            position: absolute
            background: #ffffff
            top: 0
            left: 0
            right: 0
            bottom: 0
            width: 98px
            height: 27px
            opacity: .3
            border-radius: 9px


          span
            font-size: 14px
            color: #fff
            opacity: 1


  .video-preview
    margin-right: 30px
    margin-bottom: 40px
    width: 644px
    @media (max-width: 767px)
      width: 100%
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

// popup__coming_videos
.v__dialog
  overflow: hidden !important
.card__wrapper
  a
    display: block
    margin-top: 20px
    margin-bottom: 16px
    margin-left: 23px
    text-decoration: none
    width: 40px
    height: 40px
    @media (max-width: 500px)
      margin-left: 9px
      margin-bottom:0
  .wrapper__upcoming__video__popup
      .wrap_img
        width: 427px
        height: 249px
        border-radius: 24px
        background: url('../assets/thumb.png')
        @media (max-width: 500px)
          width: 100%
          height: 150px
      h4
        font-size: 18px
        font-weight: bold
        color:  #1B1D25
        margin-top: 25px
      p
        font-size: 16px
        font-weight: bold
        color:  #1B1D25
        margin-top: 25px
        @media (max-width: 500px)
          margin-top: 10px
          font-weight: normal
      span
        position: relative
        width: 160px
        height: 31px
        display: block
        color: #6063eb
        text-align: center
        line-height: 31px
        margin-bottom: 24px
        @media (max-width: 500px)
          margin-bottom: 10px
        &:before
          content: ''
          position: absolute
          top: 0
          left: 0
          botttom: 0
          right: 0
          width: 160px
          height: 31px
          background: #6063EB
          opacity: 0.1
          border-radius: 9px
      button
        width: 427px
        height: 46px
        border-radius: 24px
        border: 1px solid #999a9c
        outline: none
        color: #1B1D25
        font-size: 16px
        @media (max-width: 500px)
          width: 100%

@media (max-width: 500px)
  .v-dialog > .v-card > .v-card__text
    padding: 0 10px 30px
</style>