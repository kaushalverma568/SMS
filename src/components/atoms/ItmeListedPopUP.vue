<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="475">
      <template v-slot:activator="{ on, attrs }">
        <div class="wrap__list__sell__content" v-bind="attrs" v-on="on">
          <button class="get_feature__btn_submit">Submit</button>
        </div>
      </template>
      <v-card class="card__product__type__wrapper">
        <v-card-title class="headline">
          <img
            src="../../assets/close-modal.svg"
            alt=""
            @click="dialog = false"
          />
        </v-card-title>

        <v-card-text class="wrapper__type__name__boxes">
          <div class="wrapper__avatar">
            <div class="avatar">
              <img :src="ItemListImg" alt="">
            </div>
            <h3>Your item has been listed!</h3>
            <p>We will notify you if someone is interested to buy your item</p>
          </div>
          <button
            id="submitbtn"
            :class="{ choosingType: ischoosingType }"
            @click="dialog = false"
          >See my item page</button>
        <router-link to="/">
          <button
            id="submitbtn"
            :class="{ choosingType: ischoosingType }"
            @click="dialog = false"
          >
            Back to home
          </button>
        </router-link>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ItemListImg from "../../assets/itemlistpop.svg"
export default {
  data() {
    return {
      dialog: false,
      ischoosingType: false,
      ItemListImg
    };
  },
  methods: {
    heighlightProductType: function (event, theClass) {
      event.target.classList.toggle(theClass);
      this.ischoosingType = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.wrap__list__sell__content
  border-radius: 14px
  // padding: 0 30px
  height: 40px
  // background: #f8f8fa
  color: #000
  width: 100%

  .line__height_adjust
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
    .title__popup_select
      color: #a0a1a2
    input
      cursor: pointer
      width: 100%
      outline: none
    .arrow__down
      img
        width: 12px
        height: 12px

// add style to popup
.card__product__type__wrapper
  .headline
    display: flex
    justify-content: space-between
    h3
      font-size: 24px
      font-weight: bold
      color: #000
    img
      cursor: pointer
  .wrapper__type__name__boxes
    margin-top: 24px
    display: flex
    justify-content: center
    flex-direction: column
    .wrapper__avatar
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      h3
        font-size: 16px
        font-weight: bold
        color: #000
        margin-top: 4px
      p
        font-size: 14px
        font-weight: normal
        color: #000
        margin-top: 8px


    button
      font-size: 16px
      font-weight: bold
      color: #000
      width: 427px
      height: 46px
      border-radius: 24px
      // border: 1px solid #dedfdf
      outline: none
      margin-bottom: 30px
      &:nth-child(2)
        border: 1px solid #a0a1a2
      &:nth-child(3)
        margin-bottom: 0
.get_feature__btn_submit
  width: 100%
  border: 1px solid #dedfdf
  height: 46px
  border-radius: 24px
  color: #BDBEBF
  font-weight: bold
  font-size: 16px
  outline: none
.v-list-item
  padding: 0 !important
</style>