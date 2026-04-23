<template>
    <div class="news-list">
        <h2>新闻列表</h2>
        <ul>
        <li v-for="news in newsList" :key="news.id" @click="goDetail(news)">
            <h3>{{ news.title }}</h3>
            <p>{{ news.summary }}</p>
            <router-link :to="{ name: 'NewsDetail', query: { id: news.id } }">查看详情</router-link>
        </li>
        </ul>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const newsList = [
    { id: 1, title: '新闻标题1', summary: '这是新闻1的摘要' },
    { id: 2, title: '新闻标题2', summary: '这是新闻2的摘要' },
    { id: 3, title: '新闻标题3', summary: '这是新闻3的摘要' }
];
const goDetail = (news) => {
    router.push({ name: 'NewsDetail',query: { id: news.id } });
    // router.push({path: '/detail', query: { id: news.id, title: news.title }});
}
// query: {
//     id: news.id
//     title: news.title
// }
</script>