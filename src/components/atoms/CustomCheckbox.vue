<template>
<div class="grid">
    <label class="checkbox bounce">
        <input type="checkbox" />
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
    </label>
</div>

</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .checkbox {
    --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #6063eb;
    --tick: #fff;
    position: relative;
    input,
    svg {
        width: 21px;
        height: 21px;
        display: block;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: #f7f7fa;
        border: 1px solid #f0f0f8;
        /* border: none; */
        border-radius: 6px;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: all .3s;
        /* box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border)); */
        &:hover {
            --s: 2px;
            --b: var(--border-hover);
        }
        &:checked {
            --b: var(--border-active);
            background:#6063eb;

        }
    }
    svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        transform: scale(var(--scale, 1)) translateZ(0);
    }
    &.path {
        input {
            &:checked {
                --s: 2px;
                transition-delay: .4s;
                & + svg {
                    --a: 16.1 86.12;
                    --o: 102.22;
                }
            }
        }
        svg {
            stroke-dasharray: var(--a, 86.12);
            stroke-dashoffset: var(--o, 86.12);
            transition: stroke-dasharray .6s, stroke-dashoffset .6s;
        }
    }
    &.bounce {
        --stroke: var(--tick);
        input {
            &:checked {
                --s: 11px;
                & + svg {
                    animation: bounce .4s linear forwards .2s;
                }
            }
        }
        svg {
            --scale: 0;
        }
    }
}

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}

</style>