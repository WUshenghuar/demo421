<template>
    <div class="demoA">
        <h1>这是DemoA组件</h1>
        <h1>{{ msg }}</h1>
        <button @click="msg = 'DemoA组件数据已更新'">更新DemoA数据</button>
    </div>
</template>
<script>
export default {
    name: 'DemoA',
    data() {
        return {
            msg: 'Hello from DemoA'
        }
    }
}
</script>