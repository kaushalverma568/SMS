<template>
  <button
    @click="onClick"
    :class="{ circle, white, small, transparent, fullRounded, big, fullWidth, transparentBlack, danger }"
    :style="{ color }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    circle: Boolean,
    white: Boolean,
    color: String,
    small: Boolean,
    big: Boolean,
    transparent: Boolean,
    fullRounded: Boolean,
    fullWidth: Boolean,
    transparentBlack: Boolean,
    danger: Boolean
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  background-color: rgba(96, 99, 235, 0.1);
  border: none;
  color: #131416;
  border-radius: 15px;
  box-shadow: none;
  padding: 0 14px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6063eb;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  img {
    margin-right: 7px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(96, 99, 235, 0.2);
  }

  &.circle {
    border-radius: 50%;
    padding: 0;
    height: 40px;
    width: 40px;
    img {
      margin-right: 0;
    }
  }

  &.white {
    background-color: white;
  }

  &.small {
    font-size: 12px;
    padding: 0 12px;
    height: 24px;
  }

  &.big {
    font-size: 16px;
    height: 46px;
    padding: 0 15px;
  }

  &.fullWidth {
    width: 100%;
  }

  &.transparent {
    border: 1px solid #f0f0f8;
    color: #25282b;
    background: transparent;
  }

  &.fullRounded {
    border-radius: 5000;
  }

  &.transparentBlack {
    background: rgba($color: #000000, $alpha: 0.2);
    color: white;
  }

  &.danger {
    background: #EF3F3F;
    color: white;
  }
}
</style>