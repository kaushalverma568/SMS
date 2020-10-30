<template>
 
  <div class="main">
    
     <carousel :per-page="3"  :mouse-drag="true" pagination="false">
    <slide
        v-for="b in 10" :key="b.id"
        >
      Slide 1 Content
    </slide>
   
  </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
  export default {
    data() {
      return {


      }
    },
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style lang="sass">
  .main
    height: 600px
    marign-top: 100px


.VueCarousel-pagination
  display: none
</style>