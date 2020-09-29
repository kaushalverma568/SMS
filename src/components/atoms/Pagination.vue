<template>
  <div class="pagination">
    <img src="../../assets/arrow-left-pagination.svg" class="left-arrow" />
    <div v-for="n in 5" class="page" :class="{ active: n === 1 }" :key="n">
      {{ n }}
    </div>
    <div class="page dots">...</div>
    <div class="page">72</div>
    <img src="../../assets/arrow-right-pagination.svg" class="right-arrow" />
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .left-arrow {
    margin-right: 20px;
  }

  .right-arrow {
    margin-left: 20px;
  }

  .page {
    font-weight: 900;
    font-size: 16px;
    color: #bdbebf;
    margin: 0 10px;
    cursor: pointer;
    &.active {
      color: #131416;
    }
  }
}
</style>