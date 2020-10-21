<template>
  <Container>
    <div class="videos">
      <div class="videos-header">
        <Title text="Videos" />

         <div class="show__big_screen">
           <CarouselPins :pages="3" :activePage="activePage" @clicked="handleCarouselChange"></CarouselPins>
         </div>

         <div class="show_small_screen">
          <router-link to="our-videos">
            <button class="see__all">See all</button>
          </router-link>
         </div>

      </div>

      <Carousel height="400px">
        <CarouseScroll :page="activePage" :perPage="2">
          <VideoPreview class="video__one" />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <router-link to="our-videos">
            <button class="see__all">See all</button>
          </router-link>
        </CarouseScroll>

      </Carousel>
    </div>
  </Container>
</template>

<script>
import Title from "./atoms/Title"
// import Button from "./atoms/Button"
import Container from "./atoms/Container"
import VideoPreview from "./organisms/VideoPreview"
import Carousel from "./atoms/Carousel/Carousel"
import CarouseScroll from "./atoms/Carousel/CarouseScroll"

import CarouselPins from "./atoms/Carousel/CarouselPins"


export default {
  name: "Videos",
  data() {
    return {
      activePage: 1,
    };
  },
  components: {
    Title,
    Container,
    // Button,
    VideoPreview,
    Carousel,
    CarouseScroll,
    CarouselPins
  },
  methods: {
    handleCarouselChange(e) {
      this.activePage = e;
      console.log(this.activePage)
    }
  }
};
</script>


<style lang="sass" scoped>
.videos
  margin-top: 40px
  overflow: hidden
  .videos-header
    display: flex
    justify-content: space-between
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

  .show__big_screen
    @media (max-width: 767px)
      display: none
  .show_small_screen
    display: none
    button
      margin-top: 0
    @media (min-width: 100px) and (max-width: 767px)
      display: block
// .video__one
  // @media (max-width: 992px)
    // width: 500px
</style>