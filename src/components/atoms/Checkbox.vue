<template>
  <div class="checkbox" @click="handleClick">
    <img class="checkbox__img" src="../../assets/checkbox-on.svg" v-if="active" />
    <img class="checkbox__img" src="../../assets/checkbox-off.svg" v-else />
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    active: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit("click", !this.active);
    },
  },
};
</script>
<style lang="sass" scoped>
  .checkbox
    .checkbox__img
      cursor: pointer !important
</style>