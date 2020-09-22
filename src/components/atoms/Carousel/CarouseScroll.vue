<template>
    <div class="carousel-scroll" :style="{ width, left }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CarouseScroll',
    props: {
        page: String
    },
    computed: {
        width() {
            return (this.$slots.default.length * (318)) + "px"
        },
        left() {
            console.log(this.page)
            return "-" + ((this.page - 1) * 3 * 318) + "px"
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