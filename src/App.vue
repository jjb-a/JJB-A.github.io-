<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="logo">临夏砖雕</div>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">历史渊源</router-link></li>
        <li><router-link to="/">工匠精神</router-link></li>
        <li><router-link to="/">作品展示</router-link></li>
        <li><router-link to="/chatbot">非遗智能体</router-link></li>
        <li><router-link to="/">传承与创新</router-link></li>
        <li><router-link to="/">联系我们</router-link></li>
      </ul>
      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 导航栏
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'SimSun', serif;
  background-color: #F5F5DC;
  color: #3E2723;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23F5F5DC"/><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23D2B48C" stroke-width="0.5" opacity="0.3"/></svg>');
  line-height: 1.6;
}

/* 导航栏 */
.navbar {
  background-color: transparent !important;
  color: #F5F5DC;
  padding: 1rem 0;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: none !important;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  border: none !important;
  outline: none !important;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #F5F5DC;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(245,245,220,0.5);
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
}

.nav-links {
  display: flex;
  list-style: none;
  justify-content: center;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a, .nav-links router-link {
  color: #F5F5DC;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(245,245,220,0.5);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover, .nav-links router-link:hover {
  color: #D4AF37;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(212,175,55,0.7);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #F5F5DC;
  margin: 3px 0;
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #3E2723;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>