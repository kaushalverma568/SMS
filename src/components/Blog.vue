<template>
  <Container>
    <div class="blog">
      <div class="blog-header">
        <Title text="Our blogs" />
        <Button transparent>See all</Button>
      </div>
      <div class="articles">
        <div class="articles-holder">
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Title from "./atoms/Title";
import Button from "./atoms/Button";
import Container from "./atoms/Container";

import BlogArticle from "./organisms/BlogArticle";

export default {
  name: "Blog",
  components: {
    Title,
    Container,
    Button,
    BlogArticle,
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

  .articles {
    display: flex;

    .articles-holder{
        display: flex;
        width: calc(410px * 3)
    }
  }
}
</style>