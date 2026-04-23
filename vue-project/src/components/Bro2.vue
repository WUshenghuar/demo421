<script>
    export default {
      name: 'Bro2',
      props: {
        receivedMessage: {
          type: String,
          default: ''
        }
      },
      data() {
        return {
          bro2Message: 'Hello from Bro2!'
        }
      },
      methods: {
        sendMessage() {
          // 发送消息给父组件，由父组件转发给Bro1
          this.$emit('bro2-send-message', this.bro2Message);
        }
      }
    }
</script>
<template>
  <div class="bro2-container">
    <h2>兄弟组件2 (Bro2)</h2>
    <div class="input-group">
      <label>发送给Bro1的消息：</label>
      <input v-model="bro2Message" type="text" placeholder="输入要发送的消息">
      <button @click="sendMessage">发送给Bro1</button>
    </div>
    <div class="received-message">
      <p>来自Bro1的消息：{{ receivedMessage }}</p>
    </div>
  </div>
</template>
<style scoped>
.bro2-container {
  padding: 20px;
  border: 2px solid #7ec0ee;
  margin: 10px;
  border-radius: 5px;
  background-color: #f8f8f8;
}
.input-group {
  margin-bottom: 15px;
}
.input-group input {
  width: 200px;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group button {
  padding: 8px 15px;
  background-color: #7ec0ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.received-message {
  padding: 10px;
  background-color: #fff0f5;
  border-radius: 4px;
}
</style>