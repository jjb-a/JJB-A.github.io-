<template>
  <div class="chatbot-view">
    <div class="chatbot-header">
      <h1>临夏砖雕 · 非遗智能体</h1>
      <button class="back-btn" @click="goBack">返回首页</button>
    </div>
    <div class="chat-wrapper">
      <div class="iframe-container">
        <iframe
          src="https://www.coze.cn/s/LWWU1X2b_M0/"
          allow="microphone *; camera *; autoplay *"
          title="临夏砖雕非遗智能体"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.chatbot-view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.chatbot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #8B4513;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 10;
}

.chatbot-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.back-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back-btn:hover {
  background: rgba(255,255,255,0.3);
}

/* 外层容器：固定宽度，让聊天区域完整显示 */
.chat-wrapper {
  flex: 1;
  width: 100%;
  position: relative;
  background: white;
  overflow: hidden;
}

/* iframe 容器：只做顶部偏移，不做右侧裁剪 */
.iframe-container {
  position: absolute;
  top: -50px;           /* 向上偏移，隐藏顶部横幅 */
  left: 0;
  width: 100%;          /* 宽度改为100%，不再裁剪右侧 */
  height: calc(100% + 60px);
  overflow: visible;    /* 允许内容完整显示 */
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chatbot-header {
    padding: 1rem;
  }
  
  .chatbot-header h1 {
    font-size: 1.2rem;
  }
  
  .back-btn {
    padding: 0.4rem 0.8rem;
  }
}
</style>