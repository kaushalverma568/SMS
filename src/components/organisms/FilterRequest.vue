<template>
  <div class="filter-request">
    <h2>Filter</h2>
    <Carousel
      height="36px"
      v-touch:swipe.right="swipeRight"
      v-touch:swipe.left="swipeLeft"
    >
      <CarouseScroll :page="activePage" :perPage="2">
        <div
          class="service-ctg"
          v-for="n in 5"
          :key="n"
          @click="activeService = n"
          :class="{ active: activeService === n }"
        >
          Service name
        </div>
      </CarouseScroll>
    </Carousel>

    <div class="dates-pickers">
      <datepicker placeholder="Select Date" v-model="startDate"></datepicker>
      <datepicker placeholder="Select Date" v-model="endDate"></datepicker>
    </div>

    <div class="apply-filter">
      <Button @click="handleApply" fullWidth transparent big>Apply</Button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

import Carousel from "../atoms/Carousel/Carousel";
import CarouseScroll from "../atoms/Carousel/CarouseScroll";
import Button from "../atoms/Button";

export default {
  name: "FilterRequest",
  props: {
      filters: Object
  },
  data() {
    return {
      activePage: 1,
      activeService: this.filters?.activeService,
      startDate: this.filters?.startDate,
      endDate: this.filters?.endDate,
    };
  },
  components: {
    Carousel,
    CarouseScroll,
    Button,
    Datepicker,
  },
  methods: {
    swipeLeft() {
      const newPage = this.activePage + 1;
      this.activePage = newPage <= 3 ? newPage : 3;
    },
    swipeRight() {
      const newPage = this.activePage - 1;
      this.activePage = newPage >= 1 ? newPage : 1;
    },
    handleApply() {
        this.$emit('apply', { startDate: this.startDate, endDate: this.endDate, service: this.activeService})
    }
  },
};
</script>


<style lang="scss" scoped>
.filter-request {
  width: 392px;
  padding: 24px;

  h2 {
    margin: 0 0 22px 0;
  }

  .apply-filter {
    margin-top: 24px;
  }
}

.service-ctg {
  border: 1px solid #f0f0f1;
  border-radius: 12px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #25282b;
  font-weight: 600;
  margin-right: 16px;
  opacity: 0.4;

  &.active {
    background: #25282b;
    color: white;
    opacity: 1;
  }
}
</style>

<style lang="scss">
.dates-pickers {
  margin-top: 24px;

  input,
  select {
    background: #f4f4f4;
    border: none;
    box-shadow: none;
    border-radius: 14px;
    height: 46px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  .vdp-datepicker{
    margin-bottom: 16px;
  }
}
</style>