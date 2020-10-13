<template>
  <div class="text-center">
    <v-container>
      <v-row justify="end">
        <v-col cols="8" class="small_mobile">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>

<style lang="sass" scoped>
  .small_mobile
    @media (max-width: 400px)
      // flex: 0
      max-width: 100%
</style>