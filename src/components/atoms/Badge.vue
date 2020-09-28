<template>
  <div class="badge" :class="{ active }">
    <slot></slot>
    <div class="badge-alert" v-if="active"></div>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.badge {
  position: relative;
  cursor: pointer;
  &.active {
    .badge-alert {
      width: 10px;
      height: 10px;
      right: -2px;
      top: -2px;
      border-radius: 50%;
      background: #dd4949;
      border: 2px solid #ffffff;
      position: absolute;
    }
  }
}
</style>