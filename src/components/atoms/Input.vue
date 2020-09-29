<template>
    <div class="input" :class="{ big } ">
        <input :placeholder="placeholder" :value="value" />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        placeholder: String,
        value: String,
        big: Boolean
    }
}
</script>

<style lang="scss" scoped>
.input {
    input {
        background:  rgba($color: #464777, $alpha: 0.04);
        border: none;
        border-radius: 15px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        width: 100%;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    }
}
</style>