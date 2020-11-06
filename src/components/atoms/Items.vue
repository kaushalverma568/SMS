<template>
  <div class="cards__wrapper">
    <div class="wrap__cards_2">

    <router-link to="/exclusive-items">
        <v-card class="Card">
          <div class="conent">
            <span class="title_card">Exclusive <br/> items</span>
            <img :src="discount" alt="">
          </div>
        </v-card>
      </router-link>

    <router-link to="/buy-sale">
        <v-card class="Card">
          <div class="conent">
            <span class="title_card">Buy and <br/> Sell</span>
            <img :src="discount" alt="">
          </div>
        </v-card>
      </router-link>

    <router-link to="/exclusive-items">
      <div class="disapple__card">
        <v-card class="Card" disabled>
          <div class="conent">
            <span class="title_card">Service <br/> name</span>
            <img :src="discount" alt="">
          </div>
        </v-card>
        <span class="coming__soon">Coming soon</span>
      </div>
    </router-link>

    <router-link to="/exclusive-items">
      <div class="disapple__card">
        <v-card class="Card" disabled>
          <div class="conent">
            <span class="title_card">Service <br/> name</span>
            <img :src="discount" alt="">
          </div>
        </v-card>
        <span class="coming__soon">Coming soon</span>
      </div>
    </router-link>

    </div>
  </div>
</template>

<script>
import discount from '../../assets/discount.svg'

// import dis fro '../.'
export default {
  data: function () {
    return {
      discount: discount,
    }
  }

}
</script>

<style lang="sass" scoped>
  .cards__wrapper
    margin-top: 40px
    position: relative
    top: 0
    .wrap__cards_2
      display: flex
      justify-content: space-between
      @media (max-width: 767px)
        flex-direction: column
        justify-content: center
        align-items: center
      .Card
        width: 235px
        height: 270px
        border-radius: 15px
        display: flex
        align-items: flex-end
        border: 1px solid #f2f2f3
        @media (max-width: 767px)
          width: 100%
        @media (max-width: 767px)
          margin-bottom: 20px
      .v-sheet.v-card:not(.v-sheet--outlined)
        box-shadow: none

        .conent
          .title_card
            position: absolute
            right: 30px
            top: 19px
            font-size: 22px
            font-weight: bold
      //card__disable
    .disapple__card
      position: relative
      @media (max-width: 767px)
        width: 100%
      .coming__soon
        position: absolute
        bottom: 10px
        right: 15px
        background-color: #fff
        border: 1px solid #f2f2f3
        width: 109px
        height: 25px
        border-radius: 15px
        font-weight: bold
        font-size: 12px
        text-align: center
        line-height: 25px
        @media(max-width: 767px)
          bottom: 30px

        &::before
          content: ''
          background-image: url(../../assets/lock.svg)
          width: 20px
          height: 20px
          position: absolute
          left: 5px
          top: 4px
</style>