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
          <Button class="detail__button">Detail</Button>
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
      <router-link to="/settings" class="to_set">
        <div class="row">
          <div class="line__height_adjust">
            <img src="../assets/settings.svg" class="action-icon" />
            Settings
          </div>
          <div class="">
            <img src="../assets/arrow-right.svg" />
        </div>
      </div>
    </router-link>
      <Button danger fullWidth big fullRounded>Log out</Button>
    </div>

    <Modal v-if="modalReferal">
      <ModalContent close="right" class="checkNum" @close="modalReferal = false">
          <form id="checkNum">

        <div class="form-referal">
          <div class="header">
            <h2>Referal code</h2>
          </div>

            <div class="form-group">
              <input type="text" id="type-number" placeholder="Write code" @click="checkFillINput"/>
            </div>

            <!-- <Button big transparent fullWidth fullRounded class="apply_border">Apply</Button> -->
            <button  class="apply-btn" id="apply-btn" disabled="disabled">Apply</button>
          <!-- <Input placeholder="Write code" id="write__code"/> -->
        </div>
          </form>

      </ModalContent>
    </Modal>

    <ModalLanguages v-if="modalLanguages" @close="modalLanguages = false" />
  </div>
</template>

<script>
import Modal from "../components/atoms/Modal"
import ModalContent from "../components/atoms/ModalContent"
import ModalLanguages from "../components/ModalLanguages"
import Button from "../components/atoms/Button"
export default {
  name: "Profile",
  data() {
    return {
      modalReferal: false,
      modalLanguages: false,
    };
  },
  components: {
    Modal,
    ModalContent,
    ModalLanguages,
    Button
  },
  methods: {

    checkFillINput: function () {

      document.querySelector("#checkNum").addEventListener('input', function() {

          let referalCode = document.querySelector("#type-number");

          let applyBtn = document.querySelector("#apply-btn");

          if (referalCode.value.length >= 6) {
            applyBtn.removeAttribute("disabled");

            document.querySelector('.apply-btn').classList.add('filled__btn')
          } else {
            applyBtn.setAttribute("disabled", "disabled");
          }
          console.log("wrokkkkkkkkkkkk");
        });


 },

    // validatCode () {
    //   const writeCode = document.getElementById('write__code')
    //   if (writeCode.value.length > 5 ) {
    //     document.querySelector('.apply_border').classList.add('show__apply__btn')
    //   }
    // }
  },
  mounted() {
    // this.checkFillINput();
    // this.validatCode()
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
          font-weight: normal

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
    input
      background-color: rgba(96, 99, 235, 0.1)
      border: none
      border-radius: 15px
      height: 40px
      display: flex
      align-items: center
      padding: 0 16px
      width: 100%
      box-sizing: border-box
      font-size: 14px
      outline: none
    h2
      font-size: 24px
      margin: 0
      margin-bottom: 28px
    .apply-btn
      margin-top: 24px
      border: 1px solid #DDDEDE
      color: #131416
      border-radius: 15px
      box-shadow: none
      padding: 0 14px
      width: 100%
      height: 46px
      display: flex
      justify-content: center
      align-items: center
      color: #BDBEBF
      font-weight: 600
      font-size: 16px
      outline: none
      transition: background-color 0.3s ease
      &.filled__btn
        border: 1px solid #000 !important
        color: #000 !important
        font-weight: bold
  .to_set
    color: #000

.apply_border
  border: 1px solid #dddede !important
  opacity: 1
.checkNum
  border-radius: 24px
</style>