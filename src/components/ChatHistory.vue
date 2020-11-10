<template>
  <div class="chat-history">
    <h1>Chat</h1>
    <SearchInput />
    <div class="chat-history-items">
      <div class="chat-history-items-scroll">
        <div class="chat-history-item" :key="n" v-for="n in 60" :class="{ active: n === 1 }">
          <div class="avatar"></div>
          <div class="preview">
            <div class="name">Consultation (Lorem ipsum)</div>
            <p>Lorem ipsum dolor sit amet con…</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './atoms/SearchInput'

export default {
  name: 'ChatHistory',
  components: {
    SearchInput
  }
}
</script>

<style lang="sass" scoped>
.chat-history
  padding: 24px
  width: 380px
  border-right: 1px solid #f0f0f1
  height: 100%
  box-sizing: border-box
  @media (max-width: 900px)
    width: auto
    padding: 10px
  @media (max-width: 500px)
    display: none
  h1
    color: #25282b
    font-size: 30px
    margin: 0
    margin-bottom: 24px


  .chat-history-items
    overflow: scroll
    max-height: calc(100% - 144px)
    margin-top: 24px


  .chat-history-item
    display: flex
    margin-bottom: 24px
    opacity: 0.5
    cursor: pointer
    &:hover
      opacity: 0.8

    .avatar
      height: 44px
      width: 44px
      background: #6063EB
      border-radius: 50%
      margin-right: 16px
      @media (max-width: 900px)
        width: 30px
        height: 30px
    .preview
      @media (max-width: 900px)
        width: 80%
      .name
        font-size: 16px
        font-weight: bold
        margin-bottom: 8px
        @media (max-width: 900px)
          font-size: 11px
          margin-bottom: 4px
      p
        font-size: 14px
        margin: 0
        @media (max-width: 900px)
          font-size: 11px
          font-weight: 300
      &.active
        opacity: 1


::-webkit-scrollbar
  width: 4px !important
  // height: 22px !important

</style>