import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
    cors: {
        origin: '*'
    },
})
export class ChatService {
    @WebSocketServer()
    server: Server

    @SubscribeMessage('typing')
    handleTyping(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
        client.broadcast.emit('typing', `${data.user} is typing F`)
    }

    @SubscribeMessage('joined')
    handleJoin(@MessageBody() data: any) {
        this.server.emit('joined', `${data.user} is joined`)
    }

}