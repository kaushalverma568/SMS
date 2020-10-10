<template>
  <v-app style="background-color: pink">
      <Header />
      <v-main class="px-16__custome">
        <router-view></router-view>
      </v-main>

  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
  .px-16__custome
    padding-right: 64px !important
    padding-left: 64px !important
    @media (max-width: 500px)
      padding-right: 15px !important
      padding-left: 15px !important
</style>
