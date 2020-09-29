<template>
  <div class="select">
    <div class="selected-value" @click="optionsOpen = !optionsOpen">
      {{ selectedValue }}
      <img src="../../assets/arrow-down-carrot.svg" />
    </div>
    <div class="options" v-if="optionsOpen">
      <div
        class="option"
        v-for="option in options"
        :key="option.value"
        @click="handleSelect(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: Array,
  },
  data() {
    return {
      optionsOpen: false,
    };
  },
  methods: {
    handleSelect(option) {
      this.$emit("change", option);
      this.optionsOpen = false;
    },
  },
  computed: {
    selectedValue() {
      const selectedOptions = this.options.filter((e) => e.selected);
      if (selectedOptions.length) {
        return selectedOptions.map((e) => e.label).join(", ");
      }
      return "";
    },
  },
};
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
    border: 1px solid #f0f0f1;
    box-shadow: 0px 11px 21px rgba(0, 0, 0, 0.104922);
    border-radius: 14px;
    z-index: 1;
    padding: 10px 0;

    .option {
      padding: 10px 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      color: #bdbebf;
      &:hover {
        color: #131416;
      }
    }
  }
}
</style>