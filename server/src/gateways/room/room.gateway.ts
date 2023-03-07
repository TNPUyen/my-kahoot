import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class RoomGateway {

  @WebSocketServer() server;

  handleHello(){
    
  }

  @SubscribeMessage('room')
  handleMessage(client: any, payload: any): string {
    this.server.emit('room-01', payload);
    return 'Hello world!';
  }
}
