<template>
    <div class="carousel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Carousel"
}
</script>

<style scoped lang="scss">
    .carousel {
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 148px;
    }
</style>