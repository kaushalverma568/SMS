<template>
  <div>
    <v-dialog
      class="adjust-height"
      v-model="dialog"
      persistent
      max-width="475"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="details__vid_popup"
          v-bind="attrs"
          v-on="on"
        >
          Details
        </button>
      </template>
      <v-card>
        <v-card-title class="headline">
          <button
            @click="dialog = false"
          >
            <img src="../../assets/close-modal.svg" alt="close-modal" />
          </button>
        </v-card-title>
        <v-card-text class="wrpper_content__vid_details">
          <div class="img_avater_vid">
            <img src="../../assets/thumb.png" alt="video imgae" />
          </div>
          <div class="title__price">
            <div class="pric__vid">
              <h4>Title Go here</h4>
              <span>
                $1.75
              </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </v-card-text>
        <v-card-actions class="button_action">
          <router-link to="/purchase-confirmation">
          <button
            class="more__button__call_action"
            @click="dialog = false"
          >
          Download now</button>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style lang="sass" scoped>
.adjust-height
  height: 600px
.details__vid_popup
  width: 51px
  height: 16px
  color: #6063Eb
  font-size: 16px
  font-weight: normal
  outline: none


.more__button__call_action
  width: 427px
  height: 46px
  font-size: 16px
  outline: none
  font-weight: bold
  border: 1px solid #bbbcdb
  border-radius: 24px
  color: #000
  margin-top: 10px
  margin-bottom: 30px


.img_avater_vid
  img
    width: 425px
    height: 249px
    border-radius: 24px
    @media (max-width: 767px)
      width: 100%
      height: 100%
.title__price
  .pric__vid
    display: flex
    justify-content: space-between
    text-align: center
    margin-top: 24px
    margin-bottom: 24px
    h4
      font-size: 18px
      font-weight: bold
      color: #131416
    span
      width: 67px
      height: 36px
      background: #dfe0fb
      border-radius: 10px
      line-height: 36px
      text-align: center
      font-size: 16px
      font-weight: bold
      color: #6063EB
  p
    font-size: 16px
    font-weight: normal
    line-height: 26px
button
  outline: none
.v-dialog:not(.v-dialog--fullscreen)
  height: 700px !important
  max-height: 700px !important

.button_action
  padding: 0 20px

.v-dialog > .v-card > .v-card__text
  padding-bottom: 0



</style>