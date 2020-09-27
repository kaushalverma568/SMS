<template>
  <div class="tile" :style="{ background, height }">
    <div class="tile-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    image: String,
    height: String,
  },
  computed: {
    background() {
      return `url(${this.image})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  background-size: cover;
  width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  box-sizing: border-box;

  .tile-content {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: " ";
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.371722) 100%
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>