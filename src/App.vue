<template>
<div class="wrap">
    <PreLoader />
    <v-app>
      <Header />
      <v-main class="px-16__custome">
        <router-view></router-view>
      </v-main>
  </v-app>
</div>

</template>

<script>
import Header from "./components/Header.vue"
import PreLoader from "./components/PreLoader.vue"
export default {
  name: 'App',
  data: function () {
    return {
      // show: false
    }
  },
  components: {
    Header,
    PreLoader
  },
  mounted () {
    // this.showContent()
  },
  methods: {
    showContent () {
      setTimeout (() => {
        this.show = true
      },3000)
    }
  }

};
</script>

<style lang="sass">
  // global_______________style
  .px-16__custome
    padding-right: 150px !important
    padding-left: 150px !important
    @media (max-width: 500px)
      padding-right: 15px !important
      padding-left: 15px !important


.theme--light.v-label
  color: #000 !important

// change the height of the dialog
.v-dialog
  height: auto !important

.v-dialog:not(.v-dialog--fullscreen)
  max-height: 100% !important


.v-sheet.v-toolbar:not(.v-sheet--outlined)
  box-shadow: none

.v-tab--active.v-tab:not(:focus)::before
  display: none

// remove all the background-color that appear on all buttons
.v-ripple___container
  display: none !important
.v-tabs, .theme--light
  border-bottom: none
.v-tabs, .theme--light
  border-bottom: none

// global__style__for_link
a
  text-decoration: none

// remove the slider border-bottom
.v-tabs-slider
  display: none

// customize checkbox
.theme--light.v-icon
  color: #f0f0f8


// remove all outline from all btns
button,
input
  outline: none



// change the sahpe of the scrollBar
::-webkit-scrollbar-track
  border-radius: 10px
::-webkit-scrollbar
  width: 8px
::-webkit-scrollbar-thumb
  border-radius: 10px
  background-color: #e2e2e4
  color: #000
</style>
