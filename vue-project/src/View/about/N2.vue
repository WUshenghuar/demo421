<script setup>
import { ref } from "vue";
import { reactive } from "vue";
import { toRefs } from "vue";
//ref 可以动态绑定基本类型，引用类型，reactive只能动态绑定引用类型
// const num2=ref(20);
// const obj=ref({
//     name:"cavendish",
//     age:18
// })
const obj2 = reactive({
    name:"cavendish1",
    age:20,
    gender:"男"
})
const {name, age, gender} = toRefs(obj2);
function test2(){
    console.log(name.value);
    console.log(age.value);
    console.log(gender.value);  
}
// function test(){
//     // console.log(this);//undefined
//     console.log(obj.value.name);
//     obj.value.name="cavendish2";
//     console.log(obj.value.name);
// }
// function f(){
//     console.log(num);
//     num=20;
//     console.log(num);
// }
// function f2(){
//     console.log(num2.value);
//     num2.value=190;
//     console.log(num2.value);
// }
</script>

<template>
  <div>
    <div>{{ name.value }}</div>
    <div>{{ age.value }}</div>
    <div>{{ gender.value }}</div>
    <button @click="test2">点击修改</button>
  </div>
</template>
<style scoped>

</style>