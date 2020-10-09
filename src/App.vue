<template>
  <v-app>

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
    padding-right: 64px
    padding-left: 64px
    @media (max-width: 500px)
      padding-right: 15px
      padding-left: 15px
</style>
