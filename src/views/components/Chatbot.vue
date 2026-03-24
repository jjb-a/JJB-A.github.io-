<template>
  <div class="chatbot-container">
    <h2>临夏砖雕 · 非遗智能体</h2>
    <div class="iframe-wrapper">
      <iframe
        src="https://www.coze.cn/s/LWWU1X2b_M0/"
        allow="microphone *; camera *; autoplay *"
        title="临夏砖雕非遗智能体"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
// Chatbot component
</script>

<style scoped>
.chatbot-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
}

.chatbot-container h2 {
  text-align: center;
  padding: 1rem;
  color: #8B4513;
  border-bottom: 1px solid #D2B48C;
}

.iframe-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>