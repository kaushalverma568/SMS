<template>
  <div class="request-details">
    <!-- <Modal v-if="conversationModalOpen"> -->
      <!-- <ModalContent @close="conversationModalOpen = false"> -->
        <!-- <Conversation inModal /> -->

      <!-- </ModalContent> -->
    <!-- </Modal> -->

    <div class="details-header">
      <div class="timeline">
        <Timeline :items="items" />
      </div>
      <div class="request-status">
        <Button small>Processing</Button>
        <!-- <img
          class="chat-icon"
          src="../assets/chat-filled.svg"
          @click="conversationModalOpen = true"
        /> -->
        <ConsultChat />
      </div>
    </div>
    <div class="request-infos">
      <img src="../assets/shop-card.svg" />
      <div class="request-name">
        <h2>Graphic design</h2>
        <p>lorem ipsum dolor sit amet…</p>
      </div>
    </div>

    <div class="request-values">
      <div class="values-row">
        <div class="values-col">Data</div>
        <div class="values-col bold">Value</div>
      </div>
      <div class="values-row">
        <div class="values-col">Data</div>
        <div class="values-col bold">Value</div>
      </div>
      <h3>Summary</h3>
      <div class="values-row">
        <div class="values-col">Sub total</div>
        <div class="values-col bold">$ 3.25</div>
      </div>
      <div class="values-row bor__bottom">
        <div class="values-col">Tax charge</div>
        <div class="values-col bold">$ 5.02</div>
      </div>
      <div class="values-row mar__top">
        <div class="values-col bold">Total price</div>
        <div class="values-col bold">$ 5.02</div>
      </div>
    </div>

    <div class="payment-action">
      <Button transparent big fullWidth>Payment</Button>
    </div>
  </div>
</template>

<script>
import Button from "./atoms/Button"
import Timeline from "./atoms/Timeline"
// import Modal from "./atoms/Modal"
// import ModalContent from "./atoms/ModalContent"
// import Conversation from "./Conversation"

import ConsultChat from "./atoms/ConsultChat"

export default {
  name: "RequestDetails",
  data() {
    return {
      conversationModalOpen: false,
      items: [
        {
          label: "Step 1",
          done: true,
        },
        {
          label: "Step 2",
          active: true,
        },
        {
          label: "Step 3",
        },
        {
          label: "Step 4",
        },
      ],
    };
  },
  components: {
    Button,
    Timeline,
    // Modal,
    // ModalContent,
    // Conversation,
    ConsultChat
  },
};
</script>

<style lang="sass" scoped>
.request-details
  width: 560px
  border: 1px solid #f0f0f1
  border-radius: 24px
  box-sizing: border-box
  display: flex
  flex-direction: column
  @media (max-width: 992px)
    width: 100%

  .details-header
    padding: 26px 32px
    border-bottom: solid 1px #f0f0f1
    margin-bottom: 32px

  .timeline
    margin-bottom: 20px

  .request-status
    width: 100%
    display: flex
    justify-content: space-between

  .chat-icon
    cursor: pointer

  .request-infos
    padding: 0 32px
    display: flex
    align-items: center
    margin-bottom: 24px

    img
      margin-right: 16px

    .request-name
      color: #131416
      h2
        opacity: 0.5
        font-size: 14px
        margin: 0 0 12px 0

      p
        font-size: 16px
        font-weight: bold
        margin: 0

  .request-values
    padding: 0 32px
    margin-bottom: 95px
    h3
      font-size: 16px
      margin: 24px 0 16px 0

    .values-row
      display: flex
      justify-content: space-between
      margin-bottom: 16px
    .bor__bottom
      border-bottom: 2px dashed #dadae4
      padding-bottom: 30px
    .mar__top
      margin-top: 23px
      .values-col
        font-size: 14px
        font-weight: 600
        opacity: 0.5
        &.bold
          opacity: 1

  .payment-action
    padding: 0 32px
    margin-bottom: 32px
    button
      border: 1px solid #dedfdf !important
</style>