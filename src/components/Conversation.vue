<template>
  <div class="conversation-wrapper">
    <div class="conversation">
      <div class="conversation-header">
        <div class="conversation-header-col">
          <h1>Consultation</h1>
          <div class="conversation-date">June 22, 2020</div>
        </div>
        <div class="conversation-header-col inline">
          <img src="../assets/camera.svg" />
          <img src="../assets/phone.svg" />
        </div>
      </div>

      <div class="conversation-list">
        <ConversationMessages />
      </div>

      <div class="conversation-actions">
        <img src="../assets/attachement.svg" />
        <input autofocus />
        <button class="send-btn">
          <img src="../assets/send.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationMessages from './organisms/ConversationMessages'

export default {
  name: 'Conversation',
  components: {
    ConversationMessages
  }
}
</script>

<style lang="scss" scoped>
.conversation-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  
  .conversation {
    margin: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px 0;
    border: 1px solid #f0f0f1;
    border-radius: 24px;
    width: 643px;
    max-width: 95%;
    position: relative;
    max-height: calc(100vh - 180px);

    .conversation-list {
      height: calc(100% - 210px);
      padding: 0 4px 4px 0;     
    }

    .conversation-header {
      border-bottom: solid 1px #f0f0f1;
      box-sizing: border-box;
      height: 100px;
      width: 100%;
      justify-self: flex-start;
      display: flex;
      align-items: center;
      justify-content: space-between;
      justify-content: space-between;
      padding: 0 24px;

      .conversation-header-col.inline {
        img {
          margin-right: 30px;
        }
      }

      h1 {
        font-size: 22px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 12px;
      }

      .conversation-date {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .conversation-actions {
      border-top: solid 1px #f0f0f1;
      min-height: 80px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;

      input {
        margin: 0 20px;
        width: calc(100% - 80px - 24px);
        box-sizing: border-box;
        border: none;
        border-radius: 20px;
        height: 40px;
        display: flex;
        align-items: center;
        background: rgba(70, 71, 119, 0.04);
        color: #1b1d25;
        padding: 0 16px;
        font-size: 14px;

        &:focus {
          outline: none;
        }
      }

      .send-btn {
        background-color: #6063eb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: none;
        box-shadow: none;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>