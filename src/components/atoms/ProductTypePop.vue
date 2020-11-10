<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="475">
      <template v-slot:activator="{ on, attrs }">
        <div class="wrap__list__sell__content" v-bind="attrs" v-on="on">
          <div class="line__height_adjust">
            <div class="title__popup_select">Data field placeholder</div>
            <div class="arrow__down">
              <img src="../../assets/arrow__down__sell_page.svg" />
            </div>
          </div>
        </div>
      </template>
      <v-card class="card__product__type__wrapper">
        <v-card-title class="headline">
          <h3>Product name</h3>
          <img
            src="../../assets/close-modal.svg"
            alt=""
            @click="dialog = false"
          />
        </v-card-title>

        <v-card-text class="wrapper__type__name__boxes">
          <!-- <div class="type__name" @click="heighlightProductType">Type name</div> -->
          <div class="type__name" @click="heighlightProductType($event, 'tyep_name__clicked')">Type name</div>
          <div class="type__name" @click="heighlightProductType($event, 'tyep_name__clicked')">Type name</div>
          <div class="type__name" @click="heighlightProductType($event, 'tyep_name__clicked')">Type name</div>
          <div class="type__name" @click="heighlightProductType($event, 'tyep_name__clicked')">Type name</div>
          <!-- <div class="type__name" @click="heighlightProductType (this)">Type name</div> -->
          <!-- <div class="type__name" @click="heighlightProductType (this)">Type name</div> -->
          <!-- <div class="type__name" @click="heighlightProductType (this)">Type name</div> -->

          <button
            id="submitbtn"
            :class="{choosingType : ischoosingType}"
            @click="dialog = false">
            Submit
          </button>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      ischoosingType: false
    };
  },
  methods: {
    heighlightProductType: function(event, theClass) {
      event.target.classList.toggle(theClass)
      this.ischoosingType = true
    },
  }
};
</script>

<style lang="sass" scoped>
.wrap__list__sell__content
  border-radius: 14px
  padding: 0 30px
  height: 40px
  background: #f8f8fa
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
    .type__name
      width: 427px
      height: 34px
      text-align: center
      line-height: 34px
      margin-bottom: 16px
      border-radius: 12px
      border: 1px solid #f0f0f8
      font-size: 14px
      font-weight: bold
      color: #a0a1a2
      background: #fff
      cursor: pointer

      &.tyep_name__clicked
        background: #e9e9ea
        color: #000

  button
    width: 427px
    height: 46px
    border-radius: 24px
    border: 1px solid #dedfdf
    outline: none
    &.choosingType
      border: 1px solid #a0a1a2
      color: #000
.v-list-item
  padding: 0 !important
</style>