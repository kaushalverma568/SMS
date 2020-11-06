<template>
  <div class="text-center">

      <v-row justify="end">
        <v-col cols="8" class="small_mobile">
          <div class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>

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

<style lang="sass">
  .small_mobile
    @media (max-width: 400px)
      // flex: 0
      max-width: 100%

.theme--light.v-pagination
  .v-pagination__item
    color: #BDBEBF


.v-application .primary
    background-color: transparent !important
.v-pagination__item
  box-shadow: none
  outline: none
.v-pagination__item--active
  box-shadow: none
.theme--light.v-pagination .v-pagination__item--active
  color: #000


.v-pagination__navigation
  box-shadow: none

.v-pagination__navigation .v-icon
  color: #000
</style>