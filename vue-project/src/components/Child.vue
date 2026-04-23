<script>
export default {
    props: ['fatherMsg'],  // 定义接收父组件数据的props
    data() {
        return {
            msg: "子组件数据"
        }
    },
    methods: {
        sendToFather() {
            // 向父组件发送数据
            this.$emit("getSonMsg", this.msg);
        },
        // 从父组件获取数据的方法
        getFromFather() {
            console.log('获取来自父组件的数据:', this.fatherMsg);
        }
    }
};
</script>
<template>
    <div class="child">
        <h1>这是子组件</h1>
        <p>{{msg}}</p>
        <p>父组件数据：{{ fatherMsg }}</p>
        <button @click="sendToFather">点击向父组件传递数据</button>
    </div>

</template>
<style>
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.son {
    height: 200px;
    background-color: rgb(200, 102, 46);
    color: rgb(24, 223, 100);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>