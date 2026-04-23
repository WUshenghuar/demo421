<template>
    <div class="news-detail">
        <h2>新闻详情</h2>
        <div class="info">
            <p>新闻ID: {{ $route.query.id }}</p>
            <h3>新闻标题: {{ $route.query.title }}</h3>
            <p>这是新闻的详细内容...</p>    
        </div>
        <button @click="$router.go(-1)">返回新闻列表</button>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const newsId = route.query.id;
const newsTitle = route.query.title;
const gback = () => {
    // 返回上一页
    window.history.back();
}
</script>