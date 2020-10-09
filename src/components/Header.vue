<template>
  <div class="header">
    <div class="header-content">
      <router-link to="/">
        <h3>Logo</h3>
      </router-link>
      <div class="header-right-side">
        <section>
          <router-link to="/consultation">
            <Button>
              <img alt="consultation icon" src="../assets/consultation.svg" />
              Consultation
            </Button>
          </router-link>
          <router-link to="/chat">
            <img alt="consultation icon" src="../assets/chat.svg" />
          </router-link>
        </section>

        <section>
          <Badge active>
            <img @click="notificationsOpen = !notificationsOpen" alt="notifications icon" src="../assets/notification.svg" />
          </Badge>
          <router-link to="/profile">
            <Button circle>
              <img alt="profile icon" src="../assets/account.svg" />
            </Button>
          </router-link>
        </section>
      </div>
    </div>
    <div class="notificaitons-wrapper" v-if="notificationsOpen">
      <Notifications />
    </div>
  </div>
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

    > *
      z-index: 2
    .header-right-side
      display: flex
      justify-content: space-between
      align-items: center

      section
        display: flex
        align-items: center
        &:first-child
          margin-right: 120px
        > *
          &:first-child
            margin-right: 40px
</style>
