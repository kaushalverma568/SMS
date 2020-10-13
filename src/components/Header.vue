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
        </div>

        <div class="button_wrapper">
          <Badge active>
            <img @click="notificationsOpen = !notificationsOpen" alt="notifications icon" src="../assets/notification.svg" />
          </Badge>

            <!-- // profile -->
          <router-link to="/profile">
            <Button circle class="btn_profil">
              <img alt="profile icon" src="../assets/account.svg" />
            </Button>
          </router-link>

        </div>

      </div>
    </div>
    <div class="notificaitons-wrapper" v-if="notificationsOpen">
      <Notifications />
    </div>
  </div>
</v-app-bar>

<!--

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card> -->


</template>

<script>
import Button from "./atoms/Button";
import Badge from "./atoms/Badge";
import Notifications from "./organisms/Notifications";

export default {
  name: "Header",
  components: {
    Button,
    Badge,
    Notifications,
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
        &::after



    > *
      z-index: 2
    .header-right-side
      display: flex
      justify-content: space-between
      align-items: center

      div.button_wrapper
        display: flex
        align-items: center
        &:first-child
          margin-right: 120px
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
            heigth: 15px

</style>
