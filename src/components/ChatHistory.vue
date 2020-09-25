<template>
  <div class="chat-history">
    <h1>Chat</h1>
    <div class="search">
      <img src="../assets/search.svg" />
      <input placeholder="Search" />
    </div>
    <div class="chat-history-items">
      <div class="chat-history-items-scroll">
        <div class="chat-history-item" :key="n" v-for="n in 60" :class="{ active: n === 1 }">
          <div class="avatar"></div>
          <div class="preview">
            <div class="name">Consultation (Lorem ipsum)</div>
            <p>Lorem ipsum dolor sit amet con…</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-history {
  padding: 24px;
  width: 380px;
  border-right: 1px solid #f0f0f1;
  height: 100%;
  box-sizing: border-box;
  
  h1 {
    color: #25282b;
    font-size: 30px;
    margin: 0;
    margin-bottom: 24px;
  }

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
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 42px;
      font-size: 16px;
      width: 100%;
      box-sizing: border-box;
    }
  }

  .chat-history-items {
    overflow: scroll;
    max-height: calc(100% - 144px);
  }

  .chat-history-item{
      display: flex;
        margin-bottom: 24px;
      opacity: 0.5;
      cursor: pointer;

      &:hover {
          opacity: 0.8;
      }
      .avatar {
          height: 44px;
          width: 44px;
          background: #6063EB;
          border-radius: 50%;
          margin-right: 16px;
          
      }

      .name {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
      }

      p {
          font-size: 14px;
          margin: 0;
      }

      &.active {
           opacity: 1;
      }
  }
}
</style>