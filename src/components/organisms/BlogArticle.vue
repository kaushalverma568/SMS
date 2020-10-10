<template>
  <div class="blog-article">

    <div class="article-thumb">
      <img src="../../assets/thumb.png" />
    </div>

    <div class="article-infos">
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit…</p>
      </div>
      <div class="article-actions">
        <div class="vues-count">43 views</div>
        <Button transparent fullRounded>
          <img src="../../assets/heart.svg" />
          18
        </Button>
      </div>
    </div>

  </div>
</template>

<script>
import Button from "../atoms/Button";

export default {
  name: "BlogArticle",
  components: {
    Button,
  },
};
</script>

<style lang="sass" scoped>
.blog-article
  display: flex
  width: 390px
  box-sizing: border-box
  border: 1px solid #e2e2e4
  border-radius: 34px
  padding: 24px
  margin-right: 30px

  @media (max-width: 767px)
    padding: 0
    margin-right: 0
    width: 235px

  .article-thumb
    margin-right: 20px
    border-radius: 24px
    overflow: hidden
    width: 124px
    height: 148px

    @media (max-width: 767px)
      width: 100%
      border-radius: 24px 24px 0 0

      img
        width: 100% !important
    img
      height: 148px
      width:124px
  .article-infos
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 148px
    width: calc(100% - 124px)

    @media (max-width: 767px)
      padding: 0 10px
      width: 100%
    h2
      margin: 0 0 8px 0
    .vues-count
        font-weight: 600
    .article-actions
      display: flex
      justify-content: space-between
      justify-self: flex-end
      align-items: center
      @media (max-width: 767px)
        margin-bottom: 10px
</style>