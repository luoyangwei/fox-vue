import config from '@/fox/config.test'
import ReconnectingWebSocket from "reconnecting-websocket";

const ws = {

    socket: null,
    server: config.protocol + config.hostname + ":" + config.port,

    /**
     * init
     */
    init() {

        console.log(this.server);
        //创建Socket实例
        let socket = new ReconnectingWebSocket(this.server);
        this.socket = socket;
        console.log(this.socket)
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = this.onMessage;
    },


    onMessage(e) {
        console.log(this.socket);
        // console.log("收到消息", JSON.parse(e.data));
    },

    onOpen() {

        // console.log(this.socket);
        // 连接上了给服务器发送一条消息告诉服务器
        // let message = {};
        // message.type = "msg";
        // this.socket.send(JSON.stringify(message));
    }

}

export default ws
