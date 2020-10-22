<template>
<v-app-bar>
  <div class="header ">
    <div class="header-content px-16__custome">
      <router-link to="/">
        <h3 class="nav_title">Logo</h3>
      </router-link>
      <div class="header-right-side">

        <div class="button_wrapper">
          <router-link to="/consultation">
            <Button class="btn_consult">
              <img alt="consultation icon" src="../assets/consultation.svg" />
              Consultation
            </Button>
          </router-link>

          <router-link to="/chat">
            <img alt="consultation icon" src="../assets/chat.svg" />
          </router-link>

          <router-link to="/request" class="ext__arrow">
            <img src="../assets/exchange-arrows.svg" alt="">
          </router-link>
        </div>

        <div class="button_wrapper">

          <Badge active>
            <img @click="notificationsOpen = !notificationsOpen" alt="notifications icon" src="../assets/notification.svg" />
          </Badge>
            <!-- menu__drop -->
           <v-menu offset-y class="navs__button">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="btn__nav"
                  circle
                >
                 <img alt="profile icon" src="../assets/account.svg" />
                </v-btn>
              </template>
              <v-list class="navs__button__list">
                <v-list-item class="adjust_position">

                  <v-list-item-title>
                    <router-link to="/profile" class="link__profile__drop">
                     <v-btn class="profile_drop">
                       Profile
                      </v-btn>
                    </router-link>
                  </v-list-item-title>

                  <v-list-item-title>
                    <SignIn />
                  </v-list-item-title>

                </v-list-item>
              </v-list>
            </v-menu>

            <!-- menu_end -->
            <!-- // profile -->
          <!-- <router-link to="/profile">
            <Button circle class="btn_profil">
              <img alt="profile icon" src="../assets/account.svg" />
            </Button>
          </router-link> -->
        </div>

      </div>
    </div>
    <div class="notificaitons-wrapper" v-if="notificationsOpen">
      <Notifications />
    </div>

  </div>
</v-app-bar>

</template>

<script>
import Button from "./atoms/Button";
import Badge from "./atoms/Badge";
import Notifications from "./organisms/Notifications";
import SignIn from './SignIn'

export default {
  name: "Header",
  components: {
    Button,
    Badge,
    Notifications,
    SignIn
  },
  data() {
    return {
      notificationsOpen: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.v-app-bar
  z-index: 100
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 80px
  display: flex
  align-items: center
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.129753)
  background: white
  z-index: 999
  .px-16__custome
    padding-right: 64px
    padding-left: 64px
    @media (max-width: 500px)
      padding-right: 15px
      padding-left: 15px


  a
    img
      opacity: 0.8
    &:hover
      img
        opacity: 1
  .notificaitons-wrapper
    position: absolute
    right: calc((100% - 979px) / 2)
    top: 100%
    z-index: 1
    @media (max-width: 767px)
      right: 0
      .notifications
        width: 250px
        height: 400px


  .header-content
    width: 100%
    max-width: 100%
    margin: auto
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    background: white
    height: 80px
    z-index: 2
    // try to add some shadow on the notification popup
    box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.129753)
    a
      text-decoration: none
      h3
        color: #000
        font-size: 24px
        font-weight: bold

    > *
      z-index: 2
    .header-right-side
      display: flex
      justify-content: space-between
      align-items: center

      div.button_wrapper
        display: flex
        align-items: center
        .ext__arrow
          margin-left: 40px
          @media (max-width: 767px)
            margin-left: 13px
        &:first-child
          margin-right: 43px
          @media (max-width: 767px)
            margin-right: 10px
        > *
          &:first-child
            margin-right: 40px
            @media (max-width: 767px)
              margin-right: 10px
        @media (max-width: 767px)
          .btn_consult
            width: 105px
            height: 30px
            font-size: 11px
          .btn_profil
            width: 30px
            height: 30px
            img
              width: 15px
              height: 15px
          img
            width: 15px
            height: 15px



.btn__nav
  background: transparent
  box-shadow: none
  width: 40px !important
  min-width: 40px !important
  height: 40px !important
  background-color: #F2F2F2 !important
  border-radius: 40px
  position: relative

  &::focus
    background: transparent !important
    box-shadow: none !important
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
  background: transparent
  &::before
    background: transparent




.adjust_position
  display: flex
  flex-direction: column

.v-menu__content
  top: 80px !important
  left: 0


.link__profile__drop
  text-decoration: none
  .profile_drop
    margin-top: 25px

    height: auto
    background: transparent
</style>
