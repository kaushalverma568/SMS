<template>
<div class="wrapper">
  <div class="request-list">

    <router-link to="/our-videos">
          <h1 class="book_mark_title">{{ TitleBookmarkVid }}</h1>
    </router-link>
    <div class="list-tabs">
      <Button :transparent="selectedTab === 1" @click="selectedTab = 0"
        >Ongoing</Button
      >
      <Button :transparent="selectedTab === 0" @click="selectedTab = 1"
        >History</Button
      >
    </div>

    <div class="owned__vid"  v-if="selectedTab === 0">
      <div class="wrapper__vid__content" v-for="n in 5" :key="n.id">
        <v-btn icon class="dots__vid">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        <div class="thumb" />
        <div class="about_vid">
          <span class="when">24 days left</span>
          <div class="title__vid">Video title here</div>
          <span class="views__vid">4.5 <b>.</b> 43 views</span>
        </div>
      </div>
    </div>

    <div class="list owned__vid" v-if="selectedTab === 1">
       <div class="wrapper__vid__content" v-for="n in 5" :key="n.id">
        <v-btn icon class="dots__vid">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        <div class="thumb" />
        <div class="about_vid">
          <span class="premium">Premium</span>
          <div class="title__vid">Video title here</div>
          <span class="views__vid">4.5 <b>.</b> 43 views</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Button from "../components/atoms/Button"

export default {
  name: "RequestList",
  components: {
    Button,
  },
  data() {
    return {
      selectedTab: 0,
      TitleBookmarkVid: "My Videos"
    };
  },
  methods: {

  }
};
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  align-items: start
  margin: 0 auto

.request-list
  width: 475px
  height: 1000px
  margin-top: 50px
  padding-right: 30px
  @media (max-width: 1000px)
    width: 100%

  .book_mark_title
    font-size: 30px
    color: #25282b
    margin-bottom: 24px
    margin-left: 30px
    position: relative
    &:before
      content: ""
      position: absolute
      top: 13px
      left: -33px
      width: 40px
      height: 40px
      background-image: url('../assets/arrow-left-big.svg')
  .list-tabs
    display: flex
    margin-bottom: 24px
    > button
      margin-right: 20px
  .owned__vid
    display: flex
    flex-direction: column
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
          color: #000
          border-radius: 14px
          background: #F0F0F1
          width: 101px
          height:29px
          margin-bottom: 9px
          display: block
          text-align: center
          line-height: 29px
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
    button
      margin-left: 20px

// global
a
  text-decoration: none

</style>