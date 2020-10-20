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
    padding-right: 64px !important
    padding-left: 64px !important
    @media (max-width: 500px)
      padding-right: 15px !important
      padding-left: 15px !important


.theme--light.v-label
  color: #000 !important


// change the sahpe of the scroll....
::-webkit-scrollbar-track
  border-radius: 10px
::-webkit-scrollbar
  width: 8px
::-webkit-scrollbar-thumb
  border-radius: 10px
  background-color: #e2e2e4
.v-dialog
  height: auto !important
</style>
