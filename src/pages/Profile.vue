<template>
  <div class="profile">
    <h1>Profile</h1>
    <div
      class="profile-picture"
      style="
        background-image: url(https://www.figma.com/file/k4olwFa1E3KVbZyx0lJETm/image/dfbf9e395c49936d67dc888ded63307f72bd8b44);
      "
    />
    <div class="profile-infos">
      <div class="name-email">
        <div class="name">Sophia Alcocar</div>
        <div class="email">sophia.alcocar@gmail.com</div>
      </div>
      <div class="see-details">
        <router-link to="/profile-details">
          <Button class="detail__button">Details</Button>
        </router-link>
      </div>
    </div>

    <div class="profile-actions">
      <div class="row" @click="modalReferal = true">
        <div class="line__height_adjust">
          <img src="../assets/ref.svg" class="action-icon" />
          Referal code
        </div>
        <div class="">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <div class="row" @click="modalLanguages = true">
        <div class="line__height_adjust">
          <img src="../assets/language.svg" class="action-icon" />
          Language
        </div>
        <div class="">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <div class="row">
        <div class="line__height_adjust">
          <img src="../assets/settings.svg" class="action-icon" />
          Settings
        </div>
        <div class="">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <Button danger fullWidth big fullRounded>Log out</Button>
    </div>

    <Modal v-if="modalReferal">
      <ModalContent close="right" rounded @close="modalReferal = false">
        <div class="form-referal">
          <div class="header">
            <h2>Referal code</h2>
          </div>
          <div class="form-group">
            <Input placeholder="Write code" />
          </div>
          <div class="apply-button">
            <Button big transparent fullWidth fullRounded>Apply</Button>
          </div>
        </div>
      </ModalContent>
    </Modal>

    <ModalLanguages v-if="modalLanguages" @close="modalLanguages = false" />
  </div>
</template>

<script>
import Button from "../components/atoms/Button";
import Modal from "../components/atoms/Modal";
import ModalContent from "../components/atoms/ModalContent";
import ModalLanguages from '../components/ModalLanguages'
import Input from "../components/atoms/Input";

export default {
  name: "Profile",
  data() {
    return {
      modalReferal: false,
      modalLanguages: false
    };
  },
  components: {
    Button,
    Modal,
    ModalContent,
    Input,
    ModalLanguages
  },
};
</script>

<style lang="sass" scoped>
.profile
  padding: 120px 0
  width: 475px
  margin: auto
  @media (max-width: 767px)
    width: 100%
  h1
    font-size: 30px
    color: #25282b
    margin: 0 0 30px 0
  .profile-picture
    position: relative
    height: 138px
    width: 138px
    background-size: cover
    border-radius: 23px
    margin-bottom: 30px
  .profile-infos
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 30px

    .see-details
      a
        text-decoration: none
        .detail__button
          width: 87px
          height: 34px
          border: 1px solid #F0F0F8
          border-radius: 15px
          background: transparent
          color: #000
          font-size: 16px
          font-wight: bold

    .name
      font-weight: 600
      font-size: 18px
      margin-bottom: 16px
    .email
      font-size: 16px
  .profile-actions
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.147755)
    border-radius: 32px
    padding: 24px 33px
    font-weight: 600
    font-size: 18px
    .row
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 24px
      cursor: pointer
      .line__height_adjust
        display: flex
        align-items: center
        @media (max-width: 767px)
          font-size: 14px
      // .col
      //   display: flex
      //   justify-content: space-between
      //   align-items: center
    .action-icon
      margin-right: 20px
  .form-referal
    padding: 24px
    width: 391px
    box-sizing: border-box
    h2
      font-size: 24px
      margin: 0
      margin-bottom: 28px
    .apply-button
      margin-top: 24px
</style>