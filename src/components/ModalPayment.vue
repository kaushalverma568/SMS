<template>
  <Modal>
    <ModalContent close="right" rounded @close="handleClose" class="wrap__modal__round">
      <div class="form-card">
        <div class="header">
          <h2>Payment detail</h2>
        </div>
        <div class="form-group" @click="enabled">
          <div class="label">Holder name</div>
          <Input value="" />
        </div>
        <div class="form-group" @click="enabled">
          <div class="label">Card number</div>
          <Input value=""  />
        </div>
        <div class="form-group" @click="enabled">
          <div class="label">Card type</div>
          <Select :options="cardOptions" @change="handleCardSelect" />
        </div>
        <Button big transparent fullWidth fullRounded class="apply__btn">Apply</Button>
      </div>
    </ModalContent>
  </Modal>
</template>

<script>
import Modal from "../components/atoms/Modal";
import ModalContent from "../components/atoms/ModalContent";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Select from "../components/atoms/Select";

export default {
  name: "ModalPayment",
  components: {
    Button,
    Input,
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
   created: function()  {
    this.enabled();
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
    enabled: function() {

         document.querySelector(".apply__btn").classList.add("filled__btn");

        // document.querySelector(".form-group").addEventListener("click", function() {
        //   console.log('workinlkjlksjflksjf')
        //   document.querySelector(".apply__btn").classList.add("filled__btn");
        // });
    }
  },

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


.apply__btn
  border: 1px solid #a0a1a2 !important
  opacity: .5
  &.filled__btn
    opacity: 1

</style>