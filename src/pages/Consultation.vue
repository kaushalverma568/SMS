<template>
  <div>
    <Conversation v-if="conversationStarted" />
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
      conversationStarted: true,
    };
  },
  methods: {
    startConversation() {
      this.conversationStarted = true;
    },
  },
};
</script>