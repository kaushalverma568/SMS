<template>
  <div class="wrapper__confirmation">
    <v-card class="" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">
            <router-link to="/lock-vid">
              <h3>Confirmation</h3>
            </router-link>
            <span>Item details</span>
          </v-list-item-title>
          <v-list-item-subtitle>

            <div class="name__file__avatar">
              <div class="avatar"></div>
              <div class="name_subname">
                <h5>grapich desing</h5>
                <span>lorem ipsum dolor sit amet</span>
              </div>
            </div>

            <div class="sumary_totla_price">
              <div class="summary">Summary</div>
             <div class="info_price">
               <div class="subtotal">
                 <p><b>Subtotal</b></p>
                 <span>$1200</span>
               </div>
               <div class="tax">
                 <p><b>tax charge</b></p>
                 <span>$18900</span>
               </div>
               <div class="totalprice">
                 <p><b>Total price</b></p>
                 <span>$1200</span>

               </div>
             </div>
            </div>

            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-card-actions>
        <button class="payment_btn"> Payment </button>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>

<style lang="sass" scoped>
.wrapper__confirmation
  display: flex
  justify-content: center
  align-items: center
  margin: 100px auto
  width: 475px
  height: 409px
  @media (max-width: 767px)
    width: 100%
  .headline
    a
      color: #000
      h3
        font-size: 30px
        font-weight: bold
        position: relative
        margin-left: 30px
        margin-bottom: 24px
        &:before
          content: ""
          position: absolute
          top: 7px
          left: -33px
          width: 24px
          height: 24px
          background-image: url(../assets/arrow-left-big.svg)
    span
      font-size: 16px
      font-weight: bold
  .name__file__avatar
    display: flex
    align-items:  center
    margin-top: 16px
    .avatar
      background-image: url('../assets/downloadicon.svg')
      width: 56px
      height: 56px
      border-radius: 50%

    .name_subname
      width: 60%
      margin-left: 25px
      h5
        font-size: 14px
        font-weight: bold
        opacity: .5
        margin-bottom: 12px
      span
        font-size: 16px
        font-weight: bold
        color: #000
        @media (max-width: 767px)
          font-size: 14px

  .sumary_totla_price
    .summary
      font-size: 16px
      font-weight: bold
      color: #000
      margin-bottom: 16px
      margin-top: 24px
    .info_price
      .subtotal,.tax,.totalprice
        display: flex
        justify-content: space-between
        p
          font-size: 14px
          font-weight: bold
          color: #000
          opacity: .5
        span
          font-size: 14px
          font-weight: bold
          color: #000
      .tax
        border-bottom: 2px dashed #e8e8ee
        margin-bottom: 20px
      .totalprice
        p
          opacity: 1
  .payment_btn
    width: 475px
    height: 46px
    border: 1px solid #939395
    border-radius: 24px
    margin-bottom: 20px
    outline: none
    color: #000
    font-weight: bold
.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none
</style>