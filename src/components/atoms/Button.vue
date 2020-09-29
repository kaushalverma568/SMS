<template>
  <button
    @click="onClick"
    :class="{ circle, white, dark, small, transparent, fullRounded, big, fullWidth, transparentBlack, danger, spaceBetween }"
    :style="{ color }"
  >
    <slot></slot>
    <img src="../../assets/arrow-down.svg" class="arrow-down-dropdown" v-if="dropdown" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    circle: Boolean,
    white: Boolean,
    dark: Boolean,
    color: String,
    small: Boolean,
    big: Boolean,
    transparent: Boolean,
    fullRounded: Boolean,
    fullWidth: Boolean,
    transparentBlack: Boolean,
    danger: Boolean,
    dropdown: Boolean,
    spaceBetween: Boolean
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
  border: 1px solid transparent;

  img {
    &:first-child {
      margin-right: 7px;
    }

    &.arrow-down-dropdown {
      margin: 0 0 0 16px;
    }
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

  &.dark {
    background: #6063EB;
    color: white;
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
    border-radius: 5000px;
  }

  &.transparentBlack {
    background: rgba($color: #000000, $alpha: 0.2);
    color: white;
  }

  &.danger {
    background: #EF3F3F;
    color: white;
  }

  &.spaceBetween {
    display: flex;
    justify-content: space-between;
  }
}
</style>