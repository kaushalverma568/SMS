<template>
  <div class="wrap__set">
    <div class="wrapper__settings">
      <router-link to="/profile">
        <h3>Settings</h3>
      </router-link>
    <ul>
      <li>
        <span>Referal code</span>
        <img src="../assets/arrow-right.svg" />
      </li>

      <li>
        <span>Help</span>
        <img src="../assets/arrow-right.svg" />
      </li>

      <li>
        <span>About</span>
        <img src="../assets/arrow-right.svg" />
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>
  .wrap__set
    margin-top: 50px
    height: 700px
    width: 100%
    display: flex
    // justify-self: cetner
    flex-direction: column
    // margin: 0 auto
    align-items: center
    .wrapper__settings
      width: 475px
      a
        color: #000
      h3
        font-size: 30px
        font-weight: bold
        color: #000
        position: relative
        margin-left: 25px
        margin-bottom: 30px
        cursor: pointer
        &:before
          content: ''
          background-image: url('../assets/arrow-left-big.svg')
          width: 20px
          height: 20px
          position: absolute
          top: 12px
          left: -30px
          right: 0
          bottom: 0
      ul
        padding: 0
        margin: 0
        width: 100%
        li
          list-style: none
          display: flex
          justify-content: space-between
          margin-bottom: 24px
          cursor: pointer
          span
            font-size: 16px
            font-weight: bold
</style>