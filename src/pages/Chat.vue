<template>
    <div class="chat-wrapper">
        <div class="chat">
            <div class="conversations-list">
                <ChatHistory />
            </div>
            <div class="current-conversation">
                <Conversation />
            </div>
        </div>
    </div>
</template>

<script>
import Conversation from "../components/Conversation";
import ChatHistory from "../components/ChatHistory";

export default {
    name: 'Chat',
    components: {
        Conversation,
        ChatHistory,
    },
}
</script>

<style lang="sass" scoped>
.chat-wrapper
    display: flex
    justify-content: center
    min-height: 100vh
    .chat
        display: flex
        border: 1px solid #f0f0f1
        margin: 120px 0
        max-height: calc(100vh - 180px)

    .current-conversation
        display: flex
        justify-content: center
</style>