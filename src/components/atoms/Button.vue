<template>
    <button :class="{ circle, white, small, transparent, fullRounded }" :style="{ color }">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
      circle: Boolean,
      white: Boolean,
      color: String,
      small: Boolean,
      transparent: Boolean,
      fullRounded: Boolean
  }
}
</script>

<style scoped lang="scss">
    button {
        background-color: rgba(96, 99, 235, 0.1);
        border: none;
        border-radius: 15px;
        box-shadow: none;
        padding: 0 14px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6063EB;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: background-color .3s ease;

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

        &.transparent{
            border: 1px solid #F0F0F8;
            color: #25282B;
            background: transparent;
        }

        &.fullRounded{
            border-radius: 5000;
        }
    }
</style>