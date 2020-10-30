<template>
  <div class="blog-article">

    <div class="article-thumb">
      <img src="../../assets/thumb.png" />
    </div>

    <div class="article-infos">
      <div>
        <h2 class="title__blog">Title blog lorem ipsum dolor sit amet</h2>
        <p class="title_sub_title">Lorem ipsum dolor sit amet consectetur adipiscing elit…</p>
      </div>
      <div class="article-actions">
        <div class="vues-count">43 views</div>
        <button class="liked__btn">
          <img src="../../assets/heart.svg" />
          18
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "BlogArticle",

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
  margin-bottom: 150px

  @media (max-width: 767px)
    // padding: 0
    margin-right: 20px
    width: 100%
    padding: 10px

  .article-thumb
    margin-right: 20px
    border-radius: 24px
    overflow: hidden
    width: 124px
    height: 148px

    @media (max-width: 767px)
      width: 100px
      height: 60px
      border-radius: 14px
      // border-radius: 24px 24px 0 0

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

    .title__blog
      font-size: 18px
      font-weight: bold
      color: #131416
      margin: 0 0 8px 0
      @media (max-width: 767px)
        font-size: 13px
    .title_sub_title
      font-size: 16px
      font-weight: normal
      @media (max-width: 767px)
        font-size: 13px
        width: 100%
    .vues-count
      font-size: 16px
      color: #1B1D25
      font-weight: 600
      @media (max-width: 767px)
        font-size: 13px
    .article-actions
      display: flex
      justify-content: space-between
      justify-self: flex-end
      align-items: center
      @media (max-width: 767px)
        margin-bottom: 10px
      .liked__btn
        font-size: 14px
        font-weight: bold
        width: 61px
        height: 30px
        border-radius: 15px
        border: 1px solid #E2E2E4
        outline: none
        line-height: 30px
        display: flex
        justify-content: space-evenly
        align-items: center
</style>