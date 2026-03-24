import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatbotView from '../views/ChatbotView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    component: ChatbotView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;