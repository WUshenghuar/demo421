<template>
  <div class="container">
    <h1>兄弟组件通信示例</h1>
    <Bro1 
      @bro1-send-message="handleBro1Message" 
      :received-message="messageToBro1"
    />
    <Bro2 
      @bro2-send-message="handleBro2Message" 
      :received-message="messageToBro2"
    />
  </div>
</template>

<script>
import Bro1 from './Bro1.vue';
import Bro2 from './Bro2.vue';

export default {
  name: 'SiblingsCommunication',
  components: {
    Bro1,
    Bro2
  },
  data() {
    return {
      messageToBro1: '',
      messageToBro2: ''
    }
  },
  methods: {
    handleBro1Message(message) {
      // 当Bro1发送消息时，将其存储以便传递给Bro2
      this.messageToBro2 = message;
    },
    handleBro2Message(message) {
      // 当Bro2发送消息时，将其存储以便传递给Bro1
      this.messageToBro1 = message;
    }
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>