<template>
  <Modal>
    <ModalContent close="right" rounded @close="handleClose" class="wrap__modal__round">
      <form id="loginForm">
        <div class="form-card">
          <div class="header">
            <h2>Payment detail</h2>
          </div>
          <div class="form-group">
            <div class="label">Holder name</div>
            <input type="text" id="username" placeholder="Sofia Alcocer">
          </div>
          <div class="form-group">
            <div class="label">Card number</div>
            <input type="text" id="cardnumber" placeholder="310299******">
          </div>
          <div class="form-group">
            <div class="label">Card type</div>
            <Select :options="cardOptions" @change="handleCardSelect" />
          </div>
          <button id="loginBtn" class="btnLogin" disabled="disabled">Apply</button>
        </div>
      </form>
    </ModalContent>
  </Modal>
</template>

<script>
import Modal from "../components/atoms/Modal"
import ModalContent from "../components/atoms/ModalContent"
import Select from "../components/atoms/Select"

export default {
  name: "ModalPayment",
  components: {
    Modal,
    ModalContent,
    Select
  },
  data() {
      return {
          cardOptions: [
              {
                  label: 'Visa',
                  value: 'VISA',
                  selected: true
              },
              {
                  label: 'Master Card',
                  value: 'MASTER_CARD'
              }
          ],
      }

  },

  methods: {

    handleClose() {
      this.$emit("close");
    },

    handleCardSelect(selectedOption) {
        this.cardOptions =  this.cardOptions.map(e => {
            return {
                ...e,
                selected: e.value === selectedOption.value
            }
        })
    },
    // function to test if the user fill all the input form or ont
    checkIN: function () {
      document.getElementById('loginForm').addEventListener('input', () => {
          const username =  document.getElementById('username')
          const cardnumber =  document.getElementById('cardnumber')
          const loginBtn =  document.getElementById('loginBtn')
        if (username.value.length > 0 && cardnumber.value.length > 0) {

          loginBtn.removeAttribute('disabled')

          document.querySelector('.btnLogin').classList.add('filled__btn')

        } else {
          loginBtn.setAttribute('disabled', 'disabled')

        }
      })
    },
  },
  mounted() {
    this.checkIN()
  }
};
</script>

<style lang="sass" scoped>
.wrap__modal__round
  border-radius: 27px !important
.form-card
  padding: 24px
  width: 391px
  box-sizing: border-box
  h2
    font-size: 24px
    margin: 0
    margin-bottom: 28px

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

  .form-group
    margin-bottom: 24px
    .payment-wrapper
      padding: 13px 24px

    .row
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 12px


  .label
    font-weight: 600
    font-size: 14px
    margin-bottom: 14px


.btnLogin
  border: 1px solid #a0a1a2
  // background-color: rgba(96, 99, 235, 0.1)
  /* border: none; */
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
</style>