<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<input type="text" v-model="name" />
	<button @click="connect">连接聊天室</button><br />
	<input type="text" v-model="msg">
    <button @click="send">发送消息</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "home",
	components: {
		HelloWorld
	},
	data() {
		return {
			name: '',
			msg: ''
		}
	},
	methods: {
		send() {
			this.$socket.emit('message', this.msg);
		},
		connect() {
			this.$socket.emit('chat', this.name);
		}
	},
	sockets: {
		connect: function() {
			console.log('连接服务器成功');
		},
		online(data) {
			console.log(data);
		},
		res(data) {
			console.log(data);
		},
		disconnect() {
			console.log('断开连接');
		}
	}
};
</script>
