<script>
    export default {
      name: 'Bro1',
      props: {
        receivedMessage: {
          type: String,
          default: ''
        }
      },
      data() {
        return {
          bro1Message: 'Hello from Bro1!'
        }
      },
      methods: {
        sendMessage() {
          // 发送消息给父组件，由父组件转发给Bro2
          this.$emit('bro1-send-message', this.bro1Message);
        }
      }
    }
</script>
<template>
  <div class="bro1-container">
    <h2>兄弟组件1 (Bro1)</h2>
    <div class="input-group">
      <label>发送给Bro2的消息：</label>
      <input v-model="bro1Message" type="text" placeholder="输入要发送的消息">
      <button @click="sendMessage">发送给Bro2</button>
    </div>
    <div class="received-message">
      <p>来自Bro2的消息：{{ receivedMessage }}</p>
    </div>
  </div>
</template>
<style scoped>
.bro1-container {
  padding: 20px;
  border: 2px solid #42b983;
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
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.received-message {
  padding: 10px;
  background-color: #e8f4ff;
  border-radius: 4px;
}
</style>