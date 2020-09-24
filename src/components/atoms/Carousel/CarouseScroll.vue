<template>
    <div class="carousel-scroll" :style="{ width, left }">
         <wrap-node :key="node" v-for='node of $slots.default' tag='div' :width="itemWidth"  :value='node' />
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
            return (95 / this.perPage) + "%"
        },
        width() {
            return (this.$slots.default.length * (95 / this.perPage)) + "%"
        },
        left() {
            return "-" + ((this.page - 1) * this.perPage *  (95 / this.perPage)) + "%"
        }
    }
}
</script>

<style scoped lang="scss">
    .carousel-scroll{
        display: flex;
        position: absolute;
        top: 0;
        transition: left .3s ease;
    }
</style>