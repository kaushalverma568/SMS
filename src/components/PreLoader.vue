<template>
  <div class="spin-wrapper" v-if="show">
    <div class="spinner">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true
    }
  },
  mounted() {
    this.showToggle()
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>


<style scoped lang="sass">
.spin-wrapper
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: #080705
  z-index: 99999
  display: flex
  justify-content: center
  align-items: center
  overflow: hidden
  opacity: .8
  .spinner
    position: absolute
    height: 250px
    width: 250px
    border: 3px solid transparent
    border-top-color: #A04668
    /* top: 10%; */
    /* left: 50%; */
    /* margin: -30px; */
    border-radius: 50%
    animation: spin 2s linear infinite

    &:before, &:after
      content:''
      position: absolute
      border: 3px solid transparent
      border-radius: 50%
    &:before
      border-top-color: #254E70
      top: -12px
      left: -12px
      right: -12px
      bottom: -12px
      animation: spin 3s linear infinite


    &:after
      border-top-color: #FFFBFE
      top: 6px
      left: 6px
      right: 6px
      bottom: 6px
      animation: spin 4s linear infinite
@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>