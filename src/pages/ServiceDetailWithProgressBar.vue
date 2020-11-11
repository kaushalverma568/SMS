<template>
  <div class="hold___service__page">
   <div class="sub__holder">
      <router-link to="/">
      <div class="hold__img">
        <img src="../assets/service-img.svg" alt="">
    </div>
      </router-link>
    <div class="content__service">
      <h4>Improve your social media trafic now</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <v-card class="card_service">
        <v-card-title class="likes__num__btn">
          <!-- <h3>1000 likes</h3> -->
          <!-- <button class="btn__price">$4.5</button> -->
          <!-- <div class="slider__service">
           <div class="small__circle">
             <span></span>
           </div>
         </div> -->
           <router-link to="/data-progress" class="data__input_btn">
              <button class="cont__btn">Continue</button>
           </router-link>
        </v-card-title>


      </v-card>
    </div>
   </div>
  </div>
</template>

<script>
  export default {
     data () {
      return {

      }
    },
  }
</script>

<style lang="sass" scoped>
.hold___service__page
  display: flex
  justify-content: center
  width: 100%
  height: 600px
  margin-top: 50px
  margin-bottom: 50px
  .sub__holder
    width: 475px
    position: relative
    .hold__img
      &:before
        content: ''
        position: absolute
        top: -1px
        left: -37px
        width: 20px
        height: 20px
        background-image: url(../assets/arrow-left-big.svg)
    .content__service
      margin-top: 40px
      text-align: center
      h4
        font-size: 16px
        font-weight: bold
        color: #000
        marign-bottom: 8px
      p
        font-size: 14px
        font-weight: normal
        color: #000
      .card_service
        margin-top: 40px
        box-shadow: nonn
        border-radius: 26px
        .likes__num__btn
          display: flex
          justify-content: space-between

        .data__input_btn
          margin-top: 40px
          width: 100%
          .cont__btn
            border: 1px solid #929395
            border-radius: 24px
            width: 100%
            height: 46px
            color: #000000
            font-weight: bold
            transition: all .6s ease-in-out
            outline: none
            background:
              image: linear-gradient(45deg, #000 50%, transparent 50%)
              position: 100%
              size: 400%
            transition: all .6s ease-in-out
            &:hover
              color: #fff
              background-position: 0
              transition: all .6s ease-in-out

</style>