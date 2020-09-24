<template>
  <Container>
    <div class="blog">
      <div class="blog-header">
        <Title text="Our blogs" />
        <Button transparent>See all</Button>
      </div>
      <Carousel height="348px" v-touch:swipe.right="swipeRight" v-touch:swipe.left="swipeLeft">
        <CarouseScroll :page="activePage" :perPage="2">
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
        </CarouseScroll>
      </Carousel>
    </div>
  </Container>
</template>

<script>
import Title from "./atoms/Title";
import Button from "./atoms/Button";
import Container from "./atoms/Container";
import Carousel from "./atoms/Carousel/Carousel";
import CarouseScroll from "./atoms/Carousel/CarouseScroll";

import BlogArticle from "./organisms/BlogArticle";

export default {
  name: "Blog",
  data() {
    return {
      activePage: 1,
    };
  },
  components: {
    Title,
    Container,
    Button,
    BlogArticle,
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
.blog {
  margin-top: 40px;
  .blog-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>