<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import router from './Router';
import N2 from"./View/about/N2.vue"
</script>

<template>
  <div class="home">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link :to="{path: '/about',}">关于2</router-link> -->
    <!-- <router-link :to="{path: '/'}"></router-link>
    <router-link :to="{path: '/'}"
    <RouterView /> -->
    <N2 />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
</style>