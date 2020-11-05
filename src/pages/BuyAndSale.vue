<template>
  <div class="wrapper__buy__sale">
    <v-card class="v___card">
      <v-list-item>
        <v-list-item-title>
          <h3 class="buy_sale_title">Sell item</h3>
          <v-list-item-subtitle class="subtitle"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, quam commodi nobis sit libero cumque animi iure sunt
            enim fugit. Nesciunt labore fuga distinctio pariatur quod dolor
            ipsum quisquam deserunt?</v-list-item-subtitle
          >
          <span>Add photo</span>
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="wrapper__list_-item">
        <v-sheet class="upload__photo">
          <img src="../assets/uploadfile.svg" alt="" />
        </v-sheet>
        <v-sheet class="upload__photo"></v-sheet>
        <v-sheet class="upload__photo"></v-sheet>
      </v-list-item>

      <v-list-item>
        <v-list-item-content class="wrap__first__row_in__sell__item">
          <v-list-item-title class="list__title">
            <h4>Listing title</h4>
            <input type="text" placeholder="Write your title" />
          </v-list-item-title>

          <div class="wrap__product_type">
            <h4>prodcut type</h4>
            <ProductType />
          </div>

          <v-list-item-title class="list__title">
            <h4>Price</h4>
            <input type="text" placeholder="Write your price" />
          </v-list-item-title>

          <v-list-item-title class="list__title">
            <h4>Description</h4>
            <textarea
              class="description__buy__sall"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            >
            </textarea>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="parent__wrapper__choose_check">
        <v-col><h2>Posting period</h2></v-col>
        <v-col class="wrapper__choose_check">
          <h4>3 days (free)</h4>
          <div @click="ShowPriceSubmitPrice = !ShowPriceSubmitPrice">
            <CheckBoxCustom/>
          </div>
        </v-col>
        <v-col class="wrapper__choose_check">
          <h4>7 days ($3.50)</h4>

          <div @click="ShowPriceSubmitPrice = !ShowPriceSubmitPrice">
            <CheckBoxCustom/>
          </div>
        </v-col>
        <v-col class="wrapper__choose_check">
          <h4>14 days ($5.00)</h4>
          <div @click="ShowPriceSubmitPrice = !ShowPriceSubmitPrice">
            <CheckBoxCustom/>
          </div>
        </v-col>
      </v-list-item>

      <v-list-item class="get__features__now">
        <v-col>
          <div class="wrap__card">
            <div class="get__features__now_first__row">
              <div class="avatar_get__features">
                <img src="../assets/getfeatured-star.svg" alt="" />
              </div>
              <div class="get__features__content">
                <h6>Get featured now</h6>
                <p>
                  Improve your selling by getting your<br />
                  item appear on the top of listing
                </p>
              </div>
            </div>
            <div class="toggel_btn_addtional_price">
              <span>Additional $2.30</span>
              <div>
                <SwitchBtn />
              </div>
            </div>
          </div>

          <div class="wrapper__btn__with__price__info__btn">
            <ItmeListedPopUP />
            <router-link to="/purchase-confirmation">
              <transition name="view">
                <div class="price__info__btn" v-if="ShowPriceSubmitPrice">
                  <span>{{ Price }}</span>
                  <button>Submit</button>
                </div>
              </transition>
            </router-link>
          </div>
        </v-col>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import ProductType from "../components/atoms/ProductTypePop"
import CheckBoxCustom from "../components/atoms/CustomCheckbox"
import ItmeListedPopUP from "../components/atoms/ItmeListedPopUP"
import SwitchBtn from "../components/atoms/Switch"

export default {
  name: "BuyAndSale",
  data() {
    return {
      Price: "$7.30",
      ShowPriceSubmitPrice: false,
    };
  },
  components: {
    ProductType,
    CheckBoxCustom,
    SwitchBtn,
    ItmeListedPopUP,
  },
  methods: {},
  mounted() {},
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
    .wrapper__list_-item
      margin-top: 15px
      padding: 0
    .buy_sale_title
      font-size: 30px
      font-weight: bold
      color: #000
      margin-left: 30px
      margin-bottom: 16px
      position: relative
      &:before
        content: ""
        position: absolute
        top: 7px
        left: -30px
        background-image: url("../assets/arrow-left-big.svg")
        width: 24px
        height: 24px
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
  display: flex
  flex-direction: column
  h2
    font-size: 14px
    font-weight: bold
    color: #000
  .wrapper__choose_check
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: nowrap

.get__features__now

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
    // display: flex
    // justify-content: center
    // align-items: center
    // flex-direction: column
    position: relative
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
    margin-bottom: 15px
    margin-top: 15px
// remove___box___shadwo

.view-enter-active, .veiw-leave-active
  transition: transfrom 0.4s ease-in-out, transform 0.4s ease-in-out

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
</style>