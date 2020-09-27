<template>
  <div class="checkbox" @click="handleClick">
    <img src="../../assets/checkbox-on.svg" v-if="active" />
    <img src="../../assets/checkbox-off.svg" v-else />
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