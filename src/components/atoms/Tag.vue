<template>
  <span class="tag">
    <slot></slot>
  </span>
</template>

<style lang="sass" scoped>
.tag
  background: #F0F0F1
  border-radius: 14px
  padding: 8px 14px
  font-weight: 900
  font-size: 16px
  @media (max-width: 767px)
    font-size: 14px

</style>