<template>
    <div class="blog">
      <div class="blog-header">
        <h3> {{ Title }} </h3>
        <router-link to="/blog">
          <button class="see__all">See all</button>
        </router-link>
      </div>
      <carousel :per-page="3">
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
        <slide class="slide__wrap">
          <BlogArticle class="blogArt" />
        </slide>
      </carousel>
    </div>
</template>

<script>
import BlogArticle from "./organisms/BlogArticle"
import { Carousel, Slide } from "vue-carousel"

export default {
  name: "Blog",
  data() {
    return {
      Title: "Our blogs"
    };
  },
  components: {
    BlogArticle,
    Carousel,
    Slide,
  }
};
</script>

<style lang="sass" scoped>
.blog
  margin-top: 40px
  .blog-header
    display: flex
    justify-content: space-between
    margin-bottom: 30px
    align-items: center
    h3
      font-size: 24px
      font-weight: bold
      color: #131416
      @media(max-width: 767px)
        font-size: 16px
    .see__all
      font-size: 16px
      font-weight: bold
      outline: none
      width: 87px
      height: 34px
      border: 1px solid #F0F0F8
      color: #000
      border-radius: 15px
  .slide__wrap
    @media (max-width: 767px)
      width: 100%
      margin-right: 20px
</style>