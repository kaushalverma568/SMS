<template>
    <form class="search">
      <img src="../../assets/search.svg" />
      <input placeholder="Search" autofocus="true" />
    </form>
</template>

<style lang="sass" scoped>
  .search
    position: relative
    width: 100%
    transition: all .4s ease-in-out

    img
      position: absolute
      left: 14px
      top: calc(50% - 12px)
      marign-top: 4px
    input
      background: #f4f4f4
      border: none
      box-shadow: none
      border-radius: 14px
      height: 46px
      display: flex
      align-items: center
      padding-left: 42px
      font-size: 16px
      width: 100%
      box-sizing: border-box
      outline: none
    &:focus-within
      transform: scale(1.1)
      transition: all .4s ease-in-out
      input
        background-color: #fff
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769)
        // border-radius: 0
</style>