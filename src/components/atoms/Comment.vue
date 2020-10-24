<template>
  <div>
  <div class="comment"  v-for="c in 10" :key="c.id">
    <div class="comment_avatar"></div>
    <div class="when_title_comment">
      <div class="comment_title">
        <h3>{{ UserTitle }}</h3>
        <span> <b>.</b>  4:40 PM</span>
      </div>
      <div class="wrap__comment">
        {{ Comment }}
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        UserTitle: "Katayama Fumiki",
        Comment: "Lorem ipsum dolor sit amet, consectetur adips elit, sed do eiusmod tempor."
      }
    }
  }
</script>

<style lang="sass" scoped>
  .comment
    margin-top: 30px
    display: flex
    // flex-direction: column
    .comment_avatar
      background-image: url('../../assets/commentavatar.svg')
      height: 42px
      width: 42px
      border-radius: 21px
      margin-right: 20px
    .when_title_comment
      // display: flex
      @media (max-width: 767px)
        width: 80%
      .comment_title
        display: flex
        h3
          font-size: 16px
          font-weight: bold
          @media (max-width: 767px)
            font-size: 12px
        span
          color: #8d8e92
          font-size: 16px
          font-weight: bold
          margin-left: 10px
          @media (max-width: 767px)
            font-size: 12px

      .wrap__comment
        font-size: 16px
        font-weight: bold
        @media (max-width: 767px)
          font-size: 11px
          font-weight: normal
</style>