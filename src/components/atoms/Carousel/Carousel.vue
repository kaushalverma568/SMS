<template>
    <div class="carousel" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        height: String
    },
    computed: {
        style () {
            return "height: " + this.height
        }
    }
}
</script>

<style scoped lang="scss">
    .carousel {
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
        cursor: pointer;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>