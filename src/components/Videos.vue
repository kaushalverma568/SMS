<template>
  <Container>
    <div class="videos">
      <div class="videos-header">
        <Title text="Videos" />
        <Button transparent>See all</Button>
      </div>
      <Carousel height="348px" v-touch:swipe.right="swipeRight" v-touch:swipe.left="swipeLeft">
        <CarouseScroll :page="activePage" :perPage="2">
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
        </CarouseScroll>
      </Carousel>
    </div>
  </Container>
</template>

<script>
import Title from "./atoms/Title";
import Button from "./atoms/Button";
import Container from "./atoms/Container";
import VideoPreview from "./organisms/VideoPreview";
import Carousel from "./atoms/Carousel/Carousel";
import CarouseScroll from "./atoms/Carousel/CarouseScroll";

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
    Button,
    VideoPreview,
    Carousel,
    CarouseScroll,
  },
  methods: {
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


<style lang="scss" scoped>
.videos {
  margin-top: 40px;
  overflow: hidden;

  .videos-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>