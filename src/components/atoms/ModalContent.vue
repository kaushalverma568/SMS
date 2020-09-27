<template>
  <div
    class="modal-content"
    :class="{ rounded, closeRight: close === 'right' }"
  >
    <slot></slot>
    <img
      @click="handleClose"
      src="../../assets/close-modal.svg"
      class="close-modal-icon"
    />
  </div>
</template>

<script>
export default {
  name: "ModalContent",
  props: {
    close: String,
    rounded: Boolean,
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  position: relative;
  background: white;

  &.rounded {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769);
    border-radius: 27px;
    border: 1px solid #979797;
  }

  &.closeRight {
    .close-modal-icon {
      position: absolute;
      top: 24px;
      left: auto;
      right: 24px;
    }
  }

  .close-modal-icon {
    position: absolute;
    top: 34px;
    left: 24px;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
  }
}
</style>