<template>
  <div class="wrapper__buy__sale">
    <v-card class="v___card">
      <v-list-item>
        <v-list-item-title>
          <router-link to="/service-detail">
            <h3 class="buy_sale_title"></h3>
          </router-link>

          <v-list-item-subtitle class="subtitle"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, quam commodi nobis sit libero cumque animi iure sunt
            enim fugit. Nesciunt labore fuga distinctio pariatur quod dolor
            ipsum quisquam deserunt?</v-list-item-subtitle
          >
          <h2 class="sec__title">Section title</h2>
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="wrap__first__row_in__sell__item">
          <v-list-item-title class="list__title">
            <h4>Data title</h4>
            <input type="text" placeholder="Data field placeholder" id="title__name" />
          </v-list-item-title>

          <div class="wrap__product_type">
            <h4 class="g__some__margin__bottom">Data selection title</h4>
            <ProductType />
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="parent__wrapper__choose_check">

        <div class="row">
          <h2>Section title</h2>
        </div>
        <div class="row wrapper__choose_check">
          <h4>Option name</h4>
          <div>
            <CheckBoxCustom/>
          </div>
        </div>
        <div class="row wrapper__choose_check">
          <h4>Option name</h4>

          <div>
            <CheckBoxCustom/>
          </div>
        </div>
        <div class="row wrapper__choose_check">
          <h4>Option name</h4>
          <div>
            <CheckBoxCustom/>
          </div>
        </div>
           <div class="row wrapper__choose_check">
          <h4>Option name</h4>
          <div>
            <CheckBoxCustom/>
          </div>
        </div>

      <div class="parent__wrapper__choose_check">
        <div class="row some__padidng__left"><h2>Posting period</h2></div>
         <ChoosePeriod TextOption="1 month (free)"/>
         <div  @click="showPriceBtn = !showPriceBtn">
          <ChoosePeriod TextOption="3 months ($5.00)"/>
         </div>
        <div  @click="showPriceBtn = !showPriceBtn">
          <ChoosePeriod TextOption="6 months ($7.00)"/>
        </div>
      </div>

      </v-list-item>
      <v-list-item class="get__features__now">
        <div class="row">
          <div class="wrapper__btn__with__price__info__btn">
              <!-- <ItmeListedPopUP class="btn_Work" />
               -->
               <!-- submit___btn -->
               <router-link to="/purchase-confirmation" class="link__to__purchase_enable">
                 <button class="btn_Work">Submit</button>
                </router-link>
                <!-- // show price with submit_btn -->
            <transition name="slide-fade">
                <v-card class="wrap__card_input" v-if="showPriceBtn">
                  <div class="price__in__data__input">
                    {{price}}
                  </div>
                  <router-link to="/purchase-confirmation">
                    <button class="but__now__btn">Buy now</button>
                  </router-link>
              </v-card>
            </transition>
          </div>
        </div>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import ProductType from "../components/atoms/ProductTypePop"
import CheckBoxCustom from "../components/atoms/CustomCheckbox"
// import ItmeListedPopUP from "../components/atoms/ItmeListedPopUP"
// import SwitchBtn from "../components/atoms/Switch"

import ChoosePeriod from "../components/atoms/ChoosePeriod"

export default {
  name: "BuyAndSale",
  data() {
    return {
      price: "$5.5",
      showPriceBtn: false,
    };
  },
  components: {
    ProductType,
    CheckBoxCustom,
    // SwitchBtn,
    // ItmeListedPopUP,
    ChoosePeriod
  },
  methods: {
    enableSubmitBtn: function () {
      // toggle enability of the submit button
      const valueInput = document.getElementById('title__name');
      valueInput.addEventListener('keyup',  () =>  {
        if (valueInput.value.length > 3) {
          document.querySelector('.link__to__purchase_enable').classList.add('btn_enabled')
        }
      })
    },
    // showBtnWPrice () {
    //   this.show = true
    // }
  },
  mounted() {
    this.enableSubmitBtn()
    // this.showBtnWPrice
  },
};
</script>

<style lang="sass" scoped>
.wrapper__buy__sale
  display: flex
  justify-content: center
  margin: 50px auto
    // align-items: center
  .v___card
    width: 475px
    a
      display: block
      margin-bottom: 46px
      .buy_sale_title
        font-size: 30px
        font-weight: bold
        color: #000
        margin-left: 30px
        position: relative
        &:before
          content: ""
          position: absolute
          top: 7px
          left: -30px
          background-image: url("../assets/arrow-left-big.svg")
          width: 24px
          height: 24px
      // margin-bottom: 45px
    .sec__title
      margin-top: 24px
      font-size: 16px
      font-weight: bold
      color: #000


    .upload__photo
      width: 140px
      height: 140px
      background: #F8F8FA
      border: 1px solid #E2E2E4
      border-radius: 24px
      border-radius: 24px
      margin-right: 10px

      display: flex
      justify-content: center
      align-items: center

      &:nth-child(1)
        border: 2px dashed #efeffd
        img
          width: 21px
          height: 21px
          cursor: pointer

.wrap__first__row_in__sell__item
  margin-top: 15px
  .list__title
    margin-bottom: 15px
    h4
      font-size: 14px
      font-weight: bold
      color: #000
      margin-bottom: 15px
    input
      width: 475px
      height: 40px
      font-size: 14px
      font-weight: normal
      // color: #a0a1a2
      outline: none
      background: #f8f8fa
      border-radius: 14px
      padding: 0 16px
      &::placeholder
        color: #a0a1a2
    .description__buy__sall
      height: 90px
      width: 100%
      outline: none
      background: #f8f8fa
      padding: 16px 16px
      outline: none
      border-radius: 14px
      // color: #a0a1a2
/// custome popup menu for modal
// .custome__popup__menu
//   width: 475px
.parent__wrapper__choose_check
  justify-content: space-between
  display: flex
  flex-direction: column
  width: 100%
  .some__padidng__left
    padding-left: 12px

  .wrapper__choose_check
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: nowrap
  .wrap__card
    background: #FFFFFF
    box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.15)
    border-radius: 15px
    margin-bottom: 30px
    display: flex
    // justify-content: space-between
    // align-items: center
    flex-direction: column
    padding: 24px 24px
    height: 142px
    .get__features__now_first__row
      display: flex
      .avatar_get__features
        margin-right: 28px
        margin-top: 4px
      .get__features__content
        h6
          font-size: 14px
          font-weight: bold
          color: #000
        p
          font-size: 12px
          font-weight: bold
          color: #B0B2B3
          margin-bottom: 0
    .toggel_btn_addtional_price
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center
      span
        margin-left: 68px
        margin-top: 17px
.wrapper__btn__with__price__info__btn
  width: 100%
  // display: flex
  // justify-content: center
  // align-items: center
  // flex-direction: column
  position: relative
  .link__to__purchase_enable
    pointer-events: none
    &.btn_enabled
      pointer-events: auto
    .btn_Work
      width: 100%
      border: 1px solid #dedfdf
      height: 46px
      border-radius: 24px
      color: #BDBEBF
      font-weight: bold
      font-size: 16px
      outline: none
      pointer-events: none


  .wrap__card_input
    position: absolute
    top: -20px
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 86px
    background: #fff
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769) !important
    border-radius: 24px
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px
    .price__in__data__input
      font-size: 20px
      font-weight: bold
      color: #6063EB
    .but__now__btn
      width: 241px
      height: 46px
      border: 1px solid #a1a0a2
      border-radius: 24px
      color: #000000
      font-weight: bold
      outline: none

    .price__info__btn
      width: 100%
      background: #25282B
      display: flex
      justify-content: space-between
      align-items: center
      border-radius: 24px
      padding: 0 33px
      height: 86px
      position: absolute
      top: 0
      right: 0
      left: 0
      bottom: 0
      z-index: 100
      span
        font-size: 20px
        font-weight: bold
        color: #fff
      button
        width: 241px
        height: 46px
        background: #131416
        border-radius: 24px
        color: #ffffff
        font-weight: bold
        font-size: 16px
        outline: none


.wrap__product_type
  margin-bottom: 15px
h4
  font-size: 14px
  font-weight: bold
  color: #000
  // margin-bottom: 15px
  // margin-top: 15px
// remove___box___shadwo
h2
  font-size: 16px
  font-weight: bold
  color: #000
.view-enter-active, .veiw-leave-active
  transition: transfrom 0.4s ease-in-out, transform 0.4s ease-in-out
.g__some__margin__bottom
  margin-bottom: 15px
// .view-enter-active
  // transition-delay: .4s

.view-enter, .view-leave-to
  transform: translateY(5px)
.view-enter-to, .view-leave
  transform: translateY(0px)

.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none

.v-list-item
  padding: 0 !important

.row
  width: 100%
  margin-bottom: 16px


// add some transition for btn_with_price_popUP

.slide-fade-enter-active
  transition: all .3s ease


.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)


.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(10px)
  opacity: 0
</style>