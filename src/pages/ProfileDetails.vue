<template>
  <div class="profile-details">
    <h1>
      <router-link to="/profile">
        <img src="../assets/arrow-left-big.svg" />
      </router-link>
      User account
    </h1>

    <div class="avatar">
      <div
        class="profile-picture"
        style="
          background-image: url(https://www.figma.com/file/k4olwFa1E3KVbZyx0lJETm/image/dfbf9e395c49936d67dc888ded63307f72bd8b44);
        "
      />
      <Button transparent>Change</Button>
    </div>

    <div class="form-profile">
      <div class="form-group">
        <div class="label">User name</div>
        <Input value="Sophie Alcocar" />
      </div>
      <div class="form-group">
        <div class="label">Email</div>
        <!-- <Input value="sophie.alcocar@gmail.com" v-model="message1" clearable/> -->

          <v-text-field
            class="text__clearable"
            clearable
            placeholder="sophie.alcocar@gmail.com"
          >
        <!-- <Input value="sophie.alcocar@gmail.com" v-model="message1" clearable/> -->

          </v-text-field>

      </div>
      <div class="form-group">
        <div class="label">Phone number</div>
        <Input value="+6281293846728" />
      </div>
      <div class="form-group">
        <div class="label">Payment</div>
        <div class="wrap__card_payment">
          <v-card class="payment-wrapper">

            <div class="wrap_first_row">
              <div class="img__card">
                <img src="../assets/card.svg" />
              </div>
              <Button small transparent @click="modalPayment = true">Edit</Button>
            </div>

            <div class="label">Master Credit Card</div>

            <div class="wrap_scound_row">
              <div class="card-owner">Sofia Alcocer</div>
              <div class="card-number">310299******</div>
            </div>
          </v-card>

        </div>
      </div>

      <Button big transparent fullWidth fullRounded>Save changes</Button>

      <ModalPayment v-if="modalPayment" @close="modalPayment = false" />
    </div>
  </div>
</template>

<script>
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

import ModalPayment from '../components/ModalPayment'

export default {
  name: "ProfileDetails",
  data() {
    return {
      modalPayment: false,
      message1: 'sophie.alcocar@gmail.com',
    };
  },
  components: {
    Button,
    Input,
    ModalPayment,
  },
};
</script>

<style lang="sass" >
.profile-details
  padding: 120px 0
  width: 475px
  margin: auto
  @media (max-width: 767px)
    width: 100%

  h1
    font-size: 30px
    color: #25282b
    margin: 0 0 30px 0


  .avatar
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 30px

    .profile-picture
      position: relative
      height: 138px
      width: 138px
      background-size: cover
      border-radius: 23px
      margin-bottom: 30px

    button
      border: 2px solid #f1f1f9 !important
      font-weight: normal



  .form-profile
    .form-group
      margin-bottom: 24px
      .payment-wrapper
        padding: 13px 24px

      .wrap_first_row,
      .wrap_scound_row
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 12px
        button
          border: 2px solid #f0f0f8 !important
          height: 30px
          padding: 0 20px
          font-weight: normal

    .label
      font-weight: 600
      font-size: 14px
      margin-bottom: 14px

    button
      border: 2px solid #f0f0f8 !important

.wrap__card_payment
  background: #FFFFFF
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.15)
  border-radius: 15px
  margin-bottom: 30px


.v-sheet.v-card:not(.v-sheet--outlined)
  box-shadow: none

.text__clearable
  // background-color: #000
  height: 40px
  border-radius: 15px
  input
    color: #25282b !important
    height: 40px
    padding: 20px
    border-radius: 15px

    background-color: rgba(70, 71, 119, 0.04)
.profile-details .form-profile button
  left: -40px
  color: #727195 !important
  top: 5px !important
.theme--light.v-icon
  color: #727195
.profile-details .form-profile button
  // border: none !important
.theme--light.v-input input, .theme--light.v-input textarea
  // color: #25282b
  color: #25282b !important
    // background: pink
.theme--light.v-text-field > .v-input__control > .v-input__slot:before
  display: none
.v-icon.v-icon.v-icon--link
  border: none !important

.focus-visible:after
  // border: none !important
  display: none
</style>