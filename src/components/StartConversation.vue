<template>
  <div class="start-conversation-wrapper">
    <div class="start-converstation">
      <div class="content">
        <div>
          <img src="../assets/call.svg" />
          <h1>You can talk to us</h1>
          <p>Make sure you keywords is correct or use another keywords</p>
        </div>
        <Button big transparent fullWidth @click="onStart">Start now</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./atoms/Button";

export default {
  name: "StartConversation",
  props: {
    onStart: Function,
  },
  components: {
    Button,
  },
};
</script>

<style lang="sass" scoped>
.start-conversation-wrapper
  display: flex
  justify-content: center
  min-height: 100vh
  .start-converstation
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    justify-content: center
    margin: 120px 0
    border: 1px solid #f0f0f1
    border-radius: 24px
    width: 643px
    max-width: 95%
    .content
      width: 343px
      height: 427px
      margin: 40px
      text-align: center
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-between
      button
        border: 1px solid #929395 !important
        /// add some hover effect to the start butn
        color: #000
        transition: all .6s ease-in-out

        background:
          image: linear-gradient(45deg, #000 50%, transparent 50%)
          position: 100%
          size: 400%
        transition: all .6s ease-in-out
        &:hover
          color: #fff
          background-position: 0
          transition: all .6s ease-in-out
    h1
      font-size: 18px
      font-weight: 600
      color: #131416
    p
      font-size: 14px
      color: #131416
      @media (max-width: 767px)
        width: 200px

</style>