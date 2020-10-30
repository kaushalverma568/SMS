<template>
  <v-card class="card">
    <router-link to="/blog">
      <v-card-title class="title_blog"> My blogs </v-card-title>
    </router-link>
    <div class="blog-article" v-for="b in 20" :key="b.id">
      <div class="article-thumb">
        <img src="../assets/thumb.png" />
      </div>

      <div class="article-infos">
        <div>
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit…</p>
        </div>
        <div class="article-actions">
          <div class="vues-count">43 views</div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BlogArticle",
  components: {},
};
</script>

<style lang="sass" scoped>
.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none

.card
  width: 600px
  display: flex
  justify-content: center
  flex-direction: column
  // align-items: center
  margin: 50px auto

  .title_blog
    font-size: 32px
    font-weight: bold
    position: relative
    color: #25282b
    margin-bottom: 15px
    &:before
      content: ""
      position: absolute
      top: 22px
      left: -8px
      background-image: url(../assets/arrow-left-big.svg)
      width: 20px
      height: 20px


  .blog-article
    display: flex
    width: 475px
    height: 196px
    box-sizing: border-box
    border: 1px solid #e2e2e4
    border-radius: 34px !important
    padding: 24px
    margin-right: 30px
    margin-bottom: 30px

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
        width: 124px
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