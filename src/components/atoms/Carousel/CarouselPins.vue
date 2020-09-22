<template>
    <div class="carousel-pins">
        <div class="carousel-pîn" v-for="n in pages" :key="n" :class="{ active: n === activePage }" @click="click(n)" />
    </div>
</template>

<script>
export default {
    name: 'CarouselPins',
    props: {
        pages: String,
        activePage: String,
        click: Function
    }
}
</script>

<style lang="scss" scoped>
.carousel-pins{
    display: flex;
    .carousel-pîn{
        width: 7px;
        height: 7px;
        background: #E2E2E4;
        border-radius: 3.5px;
        margin-left: 10px;
        transition: all .3s ease;
        cursor: pointer;

        &.active {
            background: #25282B;
            width: 13px;
        }
    }
}
</style>