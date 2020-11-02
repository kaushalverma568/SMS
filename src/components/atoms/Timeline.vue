<template>
    <div class="timeline">
                    <div class="progress" :style="{ width: progress }" />

        <div class="step" v-for="item in items" :key="item.label" :class="{ active: item.active, done: item.done }">
            <div class="step-icon">
                <img src="../../assets/timeline-active.svg" v-if="item.active" />
                <img src="../../assets/timeline-done.svg" v-else-if="item.done" />
                <img src="../../assets/timeline-undone.svg" v-else />
            </div>
            {{ item.label }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    props: {
        items: Array
    },
    computed: {
        progress() {
            const doneSteps = this.items.filter(e => e.done).length

            console.log(doneSteps)

            return `calc(((100% - 54px) / ${this.items.length - 1} * ${doneSteps})`
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 8px 18px 0 18px;

    &::before {
        content: ' ';
        position: absolute;
        height: 4px;
        width: calc(100% - 345px);
        left: 27px;
        background: #6063EB;
        top: 20px;
        z-index: 1;
    }

    .progress {
        position: absolute;
        height: 4px;
        left: 27px;
        background: #6063EB;
        top: 20px;
        z-index: -2;
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 10px;
        z-index: 10;

        img {
            margin-bottom: 16px;
        }
    }

}
</style>