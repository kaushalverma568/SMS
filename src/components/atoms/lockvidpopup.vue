<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="475"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="call__down__action"
          v-bind="attrs"
          v-on="on"
        >
          Downloadbles
        </button>
      </template>
      <v-card class="card___wrpper">
        <v-card-title class="headline">
            <button
            class="close_btn"
            @click="dialog = false"
          >
             <img src="../../assets/close-modal.svg" alt="close-modal" />
          </button>
        </v-card-title>
        <v-card-text>
          <div class="wrap_content">
            <div class="avatar" />
            <div class="text">
              <h4>This feature can’t be accessed</h4>
              <p>To access the feature, you have to buy it first as it’s premium video/series</p>
            </div>
          </div>
          <router-link to="/purchase-confirmation">
            <button
            @click="dialog = false"
            class="card__action__btn_down"
           >
           Buy now
           </button>

          </router-link>
        </v-card-text>


      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data(){
      return {
        dialog: false,
      }
    }
  }
</script>

<style lang="sass" scoped>

.call__down__action
  outline: none
  text-transform: capitalize
  font-weight: normal
.card___wrpper
  .wrap_content
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    text-align: center
  .avatar
    background-image: url('../../assets/lockicon-popupvid.svg')
    width: 160px
    height: 160px
    border-radius: 80px
    margin-bottom: 40px
  .card__action__btn_down
    width: 427px
    height: 46px
    border: 1px solid #bbbcdb
    border-radius: 45px !important
    margin-bottom: 24px
    outline: none
    font-size: 16px
    color: #000
    font-weight: bold
    margin-top: 37px

.close_btn
  outline: none
</style>