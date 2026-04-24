<script setup>
import { ref,reactive, toRefs, computed } from 'vue';
const num1=ref(20);
const num2=ref(30);
const getSum=computed(()=>num1.value*1+num2.value*1);
const getSum2=computed(function(){
  return num1.value*1+num2.value*1;
});
</script>
<template>
  <div>
    <div>{{ getSum }}</div>
    <div>{{ getSum2 }}</div>
    <!-- <button @click="test2">点击修改</button> -->
  </div>
</template>
<style scoped>

</style>