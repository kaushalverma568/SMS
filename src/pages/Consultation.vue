<template>
  <div>
    <div class="conversation-wrapper" v-if="conversationStarted">
      <Conversation border />
    </div>
    <StartConversation v-else :onStart="startConversation" />
  </div>
</template>

<script>
import StartConversation from "../components/StartConversation";
import Conversation from "../components/Conversation";

export default {
  name: "Consultation",
  components: {
    StartConversation,
    Conversation,
  },
  data() {
    return {
      conversationStarted: false,
    };
  },
  methods: {
    startConversation() {
      this.conversationStarted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.conversation-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
</style>