<template>
  <div class="dropdown-button" :class="{ open }" v-click-outside="handleClickOutside">
    <Button @click="open = !open" fullWidth big dropdown spaceBetween transparent>{{
      label
    }}</Button>
    <div class="options">
      <div
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="select(option)"
        :class="{ active: option.value === selected.value }"
      >
        <img src="../../assets/option-checked.svg" v-if="option.value === selected.value" />
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import ClickOutside from 'vue-click-outside'

export default {
  name: "DropdownButton",
  props: {
    selected: Object,
    options: Array,
    label: String,
  },
  components: {
    Button,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    select(option) {
      this.$emit("change", option);
    },
    handleClickOutside() {
        this.open = false
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.dropdown-button {
  position: relative;

  &.open {
    box-shadow: 0px 11px 21px rgba(0, 0, 0, 0.104922);
    button {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .options {
      display: block;
    }
  }

  .options {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 11px 21px rgba(0, 0, 0, 0.104922);
    background: white;
    border: 1px solid #f0f0f1;
    border-top: none;
    border-radius: 14px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: none;
    padding: 20px 0;
    .option {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #BDBEBF;
        cursor: pointer;

        &:hover {
            color: #131416;
        }

        &.active {
            color: #131416;
        }
    }
  }
}
</style>