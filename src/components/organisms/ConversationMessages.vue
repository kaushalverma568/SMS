<template>
  <div class="conversation-messages">
    <div class="conversation-messages-scroll">
      <div class="message" v-for="n in 60" :key="n">
        <div class="message-avatar">
          <Button> A </Button>
        </div>
        <div class="message-content">
          <div class="message-content-header">
            <div class="message-username">User Name</div>
            <div class="message-date">16:43</div>
          </div>
          <div class="message-content-text">
            Lorem ipsum dolor sit amet, consectetur dorelo adipiscing elit sed
            do eiusmod tempor.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button";
export default {
  name: "ConversationMessages",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.conversation-messages {
  overflow: scroll;
  max-height: calc(100vh - 401px);
  padding: 20px;
}

.message {
  display: flex;
  margin: 20px 0;

  .message-avatar {
      margin-right: 10px;
  }

  .message-content-header{
      display: flex;
      margin-bottom: 8px;

      .message-username {
          font-size: 16px;
          font-weight: 600;
          margin-right: 8px;
      }

      .message-date{
          font-size: 14px;
          opacity: 0.5;
      }
  }
}
</style>