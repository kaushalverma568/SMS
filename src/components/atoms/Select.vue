<template>
    <div class="select">
        <div class="selected-value" @click="optionsOpen = !optionsOpen">
            {{ selectedValue }}
            <img src="../../assets/arrow-down-carrot.svg" />
        </div>
        <div class="options" v-if="optionsOpen">
            <div class="option" v-for="option in options" :key="option.value" @click="handleSelect(option)">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        options: Array
    },
    data () {
        return {
            optionsOpen: false
        }
    },
    methods: {
        handleSelect(option) {
            this.$emit('change', option)
            this.optionsOpen = false
        }
    },
    computed: {
        selectedValue() {
            const selectedOptions = this.options.filter(e => e.selected)
            if (selectedOptions.length) {
                return selectedOptions.map(e => e.label).join(', ')
            }
            return ""
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
    position: relative;
    width: 100%;

    .selected-value {
        background: rgba($color: #464777, $alpha: 0.04);
        border-radius: 15px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        justify-content: space-between;
        cursor: pointer;
        z-index: 2;
    }

    .options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        box-shadow: 0 10px 10px rgba($color: #000000, $alpha: 0.1);
        z-index: 1;

        .option {
            height: 40px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            border-bottom: solid 1px #F1F1F3;
            cursor: pointer;
        }
    }

}
</style>