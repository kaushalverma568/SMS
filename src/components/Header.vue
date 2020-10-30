<template>
  <v-app-bar>
    <div class="header">
      <div class="header-content px-16__custome">
        <router-link to="/">
          <h3 class="nav_title">Log</h3>
        </router-link>
        <div class="header-right-side">
          <div class="button_wrapper">
            <router-link to="/consultation">
              <Button class="btn_consult">
                <img alt="consultation icon" src="../assets/consultation.svg" />
                Consultation
              </Button>
            </router-link>

            <!-- chat__icon -->
            <div class="wrap__btn__nav" id="myDIV">
              <div class="addHightlight">
                <router-link to="/chat" class="">
                  <!-- <img alt="consultation icon" src="../assets/chat.svg" /> -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#BDBEBF"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.53609 15.0543C4.69418 15.023 4.85839 15.0459 5.00198 15.1193C5.78131 15.5178 6.60982 15.7594 7.47465 15.8425C7.05068 11.277 10.3554 7.3178 14.7433 6.75679C13.8169 3.95742 11.1659 2 8.15566 2C4.30375 2 1.17001 5.1123 1.17001 8.9378C1.17001 10.0489 1.42451 11.1099 1.92628 12.0915C2.00001 12.2355 2.02279 12.4003 1.99107 12.5589L1.36671 15.681L4.53609 15.0543ZM22.6002 21.8054L21.9758 18.6833C21.9441 18.5247 21.9669 18.36 22.0406 18.2159C22.5424 17.2343 22.7969 16.1733 22.7969 15.0622C22.7969 11.2367 19.6631 8.1244 15.8112 8.1244C11.9857 8.1244 8.87341 11.2367 8.87341 15.0622C8.87341 18.8877 11.9857 22 15.8112 22C16.9223 22 17.9833 21.7455 18.9649 21.2437C19.1085 21.1703 19.2726 21.1475 19.4308 21.1787L22.6002 21.8054Z"
                    />
                  </svg>
                </router-link>
              </div>

              <!-- exchange__icon -->
              <div class="addHightlight">
                <router-link to="/request" class="ext__arrow">
                  <!-- <img src="../assets/exchange-arrows.svg" alt=""> -->

                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="24px"
                    viewBox="0 0 511.624 511.623"
                    style="enable-background: new 0 0 511.624 511.623"
                    xml:space="preserve"
                    fill="#BDBEBF"
                  >
                    <g>
                      <g>
                        <path
                          d="M9.135,200.996h392.862v54.818c0,2.475,0.9,4.613,2.707,6.424c1.811,1.81,3.953,2.713,6.427,2.713
			c2.666,0,4.856-0.855,6.563-2.569l91.365-91.362c1.707-1.713,2.563-3.903,2.563-6.565c0-2.667-0.856-4.858-2.57-6.567
			l-91.07-91.078c-2.286-1.906-4.572-2.856-6.858-2.856c-2.662,0-4.853,0.856-6.563,2.568c-1.711,1.715-2.566,3.901-2.566,6.567
			v54.818H9.135c-2.474,0-4.615,0.903-6.423,2.712S0,134.568,0,137.042v54.818c0,2.474,0.903,4.615,2.712,6.423
			S6.661,200.996,9.135,200.996z"
                        />
                        <path
                          d="M502.49,310.637H109.632v-54.82c0-2.474-0.905-4.615-2.712-6.423c-1.809-1.809-3.951-2.712-6.424-2.712
			c-2.667,0-4.854,0.856-6.567,2.568L2.568,340.607C0.859,342.325,0,344.509,0,347.179c0,2.471,0.855,4.568,2.568,6.275
			l91.077,91.365c2.285,1.902,4.569,2.851,6.854,2.851c2.473,0,4.615-0.903,6.423-2.707c1.807-1.813,2.712-3.949,2.712-6.427V383.72
			H502.49c2.478,0,4.613-0.899,6.427-2.71c1.807-1.811,2.707-3.949,2.707-6.427v-54.816c0-2.475-0.903-4.613-2.707-6.42
			C507.103,311.54,504.967,310.637,502.49,310.637z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </router-link>
              </div>
              <div
                class="addHightlight"
                @click="notificationsOpen = !notificationsOpen"
              >
                <!-- <img @click="notificationsOpen = !notificationsOpen" alt="notifications icon" src="../assets/notification.svg" /> -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#BDBEBF"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.40985 18.4502H20.6545C20.9808 18.4502 21.2796 18.2301 21.3475 17.911C21.4147 17.595 21.2706 17.2832 20.9785 17.1482C20.9091 17.1033 20.3873 16.7383 19.8648 15.6343C18.9053 13.6069 18.7039 10.751 18.7039 8.71215C18.7039 8.7033 18.7037 8.69446 18.7034 8.68566C18.6892 5.01904 15.7019 2.04071 12.032 2.04071C8.35331 2.04071 5.36047 5.03346 5.36047 8.71215C5.36047 10.751 5.15906 13.6069 4.19953 15.6343C3.67708 16.7383 3.15524 17.1032 3.08591 17.1482C2.79375 17.2832 2.64974 17.595 2.71691 17.911C2.78476 18.2302 3.0836 18.4502 3.40985 18.4502ZM12.0322 21.9564C10.5801 21.9564 9.3292 21.0819 8.77644 19.8322H15.2879C14.7351 21.0819 13.4842 21.9564 12.0322 21.9564Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="button_wrapper">
            <!-- menu__drop -->
            <v-menu offset-y class="navs__button">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="btn__nav" circle>
                  <img alt="profile icon" src="../assets/account.svg" />
                </v-btn>
              </template>
              <v-list class="navs__button__list">
                <v-list-item class="adjust_position">
                  <v-list-item-title>
                    <router-link to="/profile" class="link__profile__drop">
                      <v-btn class="profile_drop"> Profile </v-btn>
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
// import Badge from "./atoms/Badge";
import Notifications from "./organisms/Notifications";
import SignIn from "./SignIn";

export default {
  name: "Header",
  components: {
    Button,
    // Badge,
    Notifications,
    SignIn,
  },
  data() {
    return {
      notificationsOpen: false,
    };
  },

  methods: {
    addColor: function () {
      let el = document.getElementsByClassName("addHightlight");

      for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
          //remove class from sibilings
          let reel = el[0];

          while (reel) {
            if (reel.tagName === "DIV") {
              reel.classList.remove("addcolor");
            }
            reel = reel.nextSibling;
          }

          this.classList.toggle("addcolor");
        };
      }
    },
  
  },
  mounted: function () {
    this.addColor();
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
      .nav_title
        position: relative
        color: #000
        font-size: 24px
        font-weight: bold
        &:before
          content: ""
          position: absolute
          top: 13px
          right: -18px
          width: 17px
          height: 17px
          border-radius: 50%
          background-color: #DE7143
    > *
      z-index: 2
    .header-right-side
      display: flex
      justify-content: space-between
      align-items: center

      div.button_wrapper
        display: flex
        align-items: center
        justify-content: space-between
        .ext__arrow
          // margin-left: 40px
          @media (max-width: 767px)
            margin-left: 13px
        &:first-child
          // margin-right: 43px
          width: 350px
          @media (max-width: 767px)
            margin-right: 10px
        > *
          &:first-child
            // margin-right: 40px
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
    border-bottom: none
    
    height: auto
    background: transparent

.addcolor 
  svg
    fill: #6063eb !important


.wrap__btn__nav
  width: 100%
  display: flex
  justify-content: space-around

.navs__button__list
  height: 160px
</style>
