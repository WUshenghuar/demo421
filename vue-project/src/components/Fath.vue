<script>
import Child from './Child.vue'
import DemoA from './DemoA.vue'
import DemoB from './DemoB.vue'
    export default {
        name: "FatherDemo",
        components: {
            Child,
            DemoA,
            DemoB
        },
        data() {
            return {
                tabComponent: 'DemoA',
            }
        },
        methods: {
            switchComponent() {
                this.tabComponent = this.tabComponent === 'DemoA' ? 'DemoB' : 'DemoA';
            },
        }   

    }
</script>
<template>
<div class="father">
    <h1>这是父组件</h1>
    <button @click="switchComponent">切换组件</button>
    <keep-alive>
        <component :is="tabComponent" />
    </keep-alive>
</div>
</template>
<style>
.father {
    height: 400px;
    background-color: rgb(59, 63, 119);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>