<template>
  <Container>
    <div class="videos">
      <div class="videos-header">
        <Title text="Videos" />
         <CarouselPins :pages="3" :activePage="activePage" @clicked="handleCarouselChange"></CarouselPins>
      </div>

      <Carousel height="400px" v-touch:swipe.right="swipeRight" v-touch:swipe.left="swipeLeft">
        <CarouseScroll :page="activePage" :perPage="2">
          <VideoPreview class="video__one" />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
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
    },
    swipeLeft() {
      const newPage = this.activePage + 1;
      this.activePage = newPage <= 3 ? newPage : 3;
    },
    swipeRight() {
      const newPage = this.activePage - 1;
      this.activePage = newPage >= 1 ? newPage : 1;
    },
  },
};
</script>


<style lang="sass" scoped>
.videos
  margin-top: 40px
  overflow: hidden
  .videos-header
    display: flex
    justify-content: space-between

.video__one
  @media (max-width: 992px)
    // width: 500px
</style>