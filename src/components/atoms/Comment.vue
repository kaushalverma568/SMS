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
    <!-- <div class="wite__comment">
      <input type="text" placeholder="Write comment…">
    </div> -->

    <div class="type__comment">
        <input @click="showConversationArrow" type="text" class="input__type reduce-width" placeholder="Write comment…" />
        <transition name="slide-fade">
           <button v-if="conversation" class="start__convers">
            <img src="../../assets/arrow-conversation.svg" alt="">
          </button>
        </transition>
      </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        UserTitle: "Katayama Fumiki",
        Comment: "Lorem ipsum dolor sit amet, consectetur adips elit, sed do eiusmod tempor.",
        conversation: false

      }
    },
    methods: {
    showConversationArrow() {
      this.conversation = true;
    }
  },
  mounted () {
    this.showConversationArrow
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

.type__comment
  display: flex
  align-items: center
  margin-top: 13px
  width: 100%
  .input__type
    width: 100%
    height: 48px
    outline: none
    border-radius: 14px
    background: #F4F4F4
    padding: 20px
    margin-top: 9px
    font-size: 16px
    font-weight: bold
    color: #9d9ea1
    &.reduce-width
      width: 80%
  .start__convers
    display: flex
    justify-content: center
    align-items: center
    width: 42px
    height:  42px
    background: #6063EB
    border-radius: 24px
    margin-left: 20px
    outline: none




.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

</style>