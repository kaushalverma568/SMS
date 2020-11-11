<template>
  <div class="filter-request">
    <h2>Filter</h2>
    <Carousel class="car__fle" height="36px" :mouse-drag="true" :per-page="2">
      <Slide>
        <div
        class="service-ctg"
        @click="heighlightProductType($event, 'active')"
        >Service name</div>
      </Slide>

      <Slide>
        <div
          class="service-ctg"
          @click="heighlightProductType($event, 'active')"
        >Service name</div>
      </Slide>

      <Slide>
        <div
          class="service-ctg"
          @click="heighlightProductType($event, 'active')"
        >Service name</div>
      </Slide>

      <Slide>
        <div
          class="service-ctg"
          @click="heighlightProductType($event, 'active')"
        >Service name</div>
      </Slide>

      <Slide>
        <div
          class="service-ctg"
          @click="heighlightProductType($event, 'active')"
        >Service name</div>
      </Slide>
    </Carousel>

    <div class="dates-pickers">
      <div class="data-holder">
        <datepicker placeholder="Select Date" v-model="startDate"></datepicker>
        <img src="../../assets/arrow-down-carrot.svg" class="arrow-down-icon" />
      </div>
      <div class="data-holder">
        <datepicker placeholder="Select Date" v-model="endDate"></datepicker>
        <img src="../../assets/arrow-down-carrot.svg" class="arrow-down-icon" />
      </div>
    </div>

    <div class="apply-filter">
      <Button class="apply___btn"
        @click="handleApply"
        fullWidth
        transparent
        big
        :class="{choosingService : ischoosingType}"
      >
      Apply</Button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Button from "../atoms/Button";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "FilterRequest",
  props: {
    filters: Object,
  },
  data() {
    return {
      activePage: 1,
      activeService: this.filters?.activeService,
      startDate: this.filters?.startDate,
      endDate: this.filters?.endDate,
      ischoosingType: false

    };
  },
  components: {
    Carousel,
    Slide,
    Button,
    Datepicker,
  },
  methods: {
    // swipeLeft() {
    //   const newPage = this.activePage + 1;
    //   this.activePage = newPage <= 3 ? newPage : 3;
    // },
    // swipeRight() {
    //   const newPage = this.activePage - 1;
    //   this.activePage = newPage >= 1 ? newPage : 1;
    // },
    handleApply() {
      this.$emit("apply", {
        startDate: this.startDate,
        endDate: this.endDate,
        service: this.activeService,
      });
    },

    heighlightProductType: function(event, theClass) {
      event.target.classList.toggle(theClass)
      this.ischoosingType = true
    },
  },
};
</script>


<style lang="sass" scoped>
.filter-request
  width: 392px
  padding: 24px
  @media (max-width: 767px)
    width: 100%

  h2
    margin: 0 0 22px 0

  .apply-filter
    margin-top: 24px
    .apply___btn
      border: 2px solid #dddede !important
      border-radius: 24px
      font-weight: bold
      color: #BDBEBF
      &.choosingService
        border: 1px solid #000 !important
        color: #000


.service-ctg
  border: 2px solid #f0f0f8
  border-radius: 12px
  height: 34px
  display: flex
  align-items: center
  justify-content: center
  font-size: 14px
  color: #a0a1a2
  font-weight: 600
  margin-right: 16px
  cursor: pointer
  &.active
    background: #25282b
    color: white


.dates-pickers
  margin-top: 24px

  .data-holder
    position: relative
    .arrow-down-icon
      position: absolute
      right: 16px
      top: 17px
  input,
  select
    background: #f4f4f4
    border: none
    box-shadow: none
    border-radius: 14px
    height: 46px
    display: flex
    align-items: center
    padding-left: 16px
    font-size: 16px
    width: 100%
    box-sizing: border-box
  .vdp-datepicker
    margin-bottom: 16px
    background: #F2F2F2
    width: 100%
    height: 40px
    border-radius: 15px
    padding: 7px 16px
    input
      width: 100%
      outline: none

.VueCarousel-slide
  display: flex
  .service-ctg
    width: 150px
</style>