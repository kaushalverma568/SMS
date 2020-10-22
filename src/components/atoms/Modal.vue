<template>
    <div class="modal">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 1%, rgba(0, 0, 0, 0.4) 100%)
  z-index: 99999
  display: flex
  align-items: center
  justify-content: center

  .modal-content
    @media (max-width: 767px)
        width: 100%
</style>