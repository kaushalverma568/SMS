<template>
    <div class="search">
      <img src="../../assets/search.svg" />
      <input placeholder="Search" autofocus="true" />
    </div>
</template>

<style lang="scss" scoped>

  .search {
    position: relative;
    width: 100%;
    margin-bottom: 24px;
    img {
      position: absolute;
      left: 14px;
      top: calc(50% - 12px);
    }
    input {
      background: #f4f4f4;
      border: none;
      box-shadow: none;
      border-radius: 14px;
      height: 46px;
      display: flex;
      align-items: center;
      padding-left: 42px;
      font-size: 16px;
      width: 100%;
      box-sizing: border-box;

      &:focus {
          outline: none;
      }
    }
  }
</style>