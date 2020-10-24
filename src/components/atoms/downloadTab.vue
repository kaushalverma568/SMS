<template>
  <div class="download__tab">
    <div class="wrapper__tab_download__vid" v-for="d in 5" :key="d.id">
      <div class="vid__details_to_donwload">
        <div class="icon" />
        <div class="download_title_vid">
          <h4>Graphic Design Template 1</h4>
          <a>Details</a>
        </div>
      </div>
      <div class="download__vid">Download</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {

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
</style>