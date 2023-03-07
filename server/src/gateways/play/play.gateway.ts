import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class PlayGateway {
  @WebSocketServer() server;

  @SubscribeMessage('room')
  handleRoom(client: any, payload: any): string {
    
    return 'Hello world!';
  }

  @SubscribeMessage('play')
  handlePlay(client: any, payload: any): string {
    this.server.emit(`play-${payload.roomId}`, 'Welcome to the room!');
    return 'Hello world!';
  }
}
