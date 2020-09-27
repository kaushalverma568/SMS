<template>
  <Modal>
    <ModalContent close="right" rounded @close="handleClose">
      <div class="form-card">
        <div class="header">
          <h2>Payment detail</h2>
        </div>
        <div class="form-group">
          <div class="label">Holder name</div>
          <Input value="" />
        </div>
        <div class="form-group">
          <div class="label">Card number</div>
          <Input value="" />
        </div>
        <div class="form-group">
          <div class="label">Card type</div>
          <Select :options="cardOptions" @change="handleCardSelect" />
        </div>
        <Button big transparent fullWidth fullRounded>Save changes</Button>
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
    }
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  padding: 24px;
  width: 391px;
  box-sizing: border-box;
  h2 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 28px;
  }

  .form-group {
    margin-bottom: 24px;
    .payment-wrapper {
      padding: 13px 24px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
  }
  .label {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 14px;
  }
}
</style>