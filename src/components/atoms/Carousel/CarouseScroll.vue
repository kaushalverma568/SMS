<template>
    <div class="carousel-scroll" :style="{ width, left }">
         <wrap-node :key="node.id" v-for='node of $slots.default' tag='div' :width="itemWidth"  :value='node' />
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('wrap-node', {
  props: {
    value: {type: [Object, Array], required: true},
    tag: {type: String, default: 'div'},
    width: String ,
    options: {
      type: Object, default: () => {
      }
    },
  },
  render: function (h) {
    let nodes = this.value
    if (!Array.isArray(nodes)) {
      nodes = [nodes]
    }
    return h(this.tag, {
      class: "carousel-item",
      style: `width: ${this.width}`
    }, nodes)
  }
})

export default {
    name: 'CarouseScroll',
    props: {
        page: Number,
        perPage: Number
    },
    computed: {
        itemWidth () {
            return (85 / this.perPage) + "%"
        },
        width() {
            return (this.$slots.default.length * (85 / this.perPage)) + "%"
        },
        left() {
            return "-" + ((this.page - 1) * this.perPage *  (85 / this.perPage)) + "%"
        }
    }
}
</script>

<style scoped lang="sass">
  .carousel-scroll
    display: flex
    position: absolute
    top: 0
    transition: left .3s ease


    @media (max-width: 992px)
      width: auto !important
    div
      @media (max-width: 992px)
        width: 250px !important
</style>