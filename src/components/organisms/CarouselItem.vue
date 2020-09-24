<template>
    <div class="carousel-item" :style="{ backgroundColor }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    props: {
        backgroundColor: String
    }
}
</script>

<style scoped lang="scss">
    .carousel-item {
        height: 148px;
        border-radius: 15px;
        margin-right: 20px;
        position: relative;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 24px;
        overflow: hidden;

        &::after{
            content: ' ';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            z-index: 1;
        }


        > * {
            z-index: 1;
            position: relative;
        }

        img {
            position: absolute;
            right: -30px;
            bottom: 0;
            height: 140px;
            z-index: 0;
        }

        h1 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        p {
            font-size: 12px;
            font-weight: 600;
            margin: 0 0 20px 0;
        }
    }
</style>