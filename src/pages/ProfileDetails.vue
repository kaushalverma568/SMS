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
        <Input value="sophie.alcocar@gmail.com" />
      </div>
      <div class="form-group">
        <div class="label">Phone number</div>
        <Input value="+6281293846728" />
      </div>
      <div class="form-group">
        <div class="label">Payment</div>
        <div class="payment-wrapper">
          <div class="row">
            <img src="../assets/card.svg" />
            <Button small transparent @click="modalPayment = true">Edit</Button>
          </div>
          <div class="label">Master Credit Card</div>
          <div class="row">
            <div class="card-owner">Sofia Alcocer</div>
            <div class="card-number">310299******</div>
          </div>
        </div>
      </div>

      <Button big transparent fullWidth fullRounded>Save changes</Button>

      <Modal v-if="modalPayment">
        <ModalContent close="right" rounded @close="modalPayment = false">
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
              <Input value="" />
            </div>
            <Button big transparent fullWidth fullRounded>Save changes</Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  </div>
</template>

<script>
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Modal from "../components/atoms/Modal";
import ModalContent from "../components/atoms/ModalContent";

export default {
  name: "ProfileDetails",
  data() {
    return {
      modalPayment: false,
    };
  },
  components: {
    Button,
    Input,
    Modal,
    ModalContent,
  },
};
</script>

<style lang="scss" scoped>
.profile-details {
  padding: 120px 0;
  width: 475px;
  margin: auto;
  h1 {
    font-size: 30px;
    color: #25282b;
    margin: 0 0 30px 0;
  }

  .avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .profile-picture {
      position: relative;
      height: 138px;
      width: 138px;
      background-size: cover;
      border-radius: 23px;
      margin-bottom: 30px;
    }
  }

  .form-profile {
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

  .form-card {
    padding: 24px;
    width: 391px;
    box-sizing: border-box;
    h2 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 28px;
    }
  }
}
</style>