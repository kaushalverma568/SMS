<template>
  <div class="download__tab">
    <div class="wrapper__tab_download__vid" v-for="d in 5" :key="d.id">
      <div class="vid__details_to_donwload">
        <div class="icon" />
        <div class="download_title_vid">
          <h4>Graphic Design Template 1</h4>
          <MoreDetails />
        </div>
      </div>
      <router-link to="purchase-confirmation">
        <div class="download__vid">Download</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MoreDetails from './MoreDetails'
  export default {
    data: function () {
    },
    components: {
      MoreDetails
    }
  }
</script>

<style lang="sass" scoped>
  .download__tab
    margin-top: 30px
    .wrapper__tab_download__vid
      display: flex
      justify-content: space-between
      margin-bottom: 24px
    .vid__details_to_donwload
      display: flex

      .icon
        background-image: url('../../assets/downloadicon.svg')
        width: 56px
        height: 56px
        margin-right: 20px
      .download_title_vid
    .download__vid
      width: 108px
      height: 34px
      border: 1px solid #f0f0f8
      border-radius: 15px
      text-align: center
      line-height: 34px
      cursor: pointer
      color: #000

</style>