import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private socket: Socket) { }

  joinRoom(roomId: string) {
    this.socket.emit('play', { roomId });
  }

  getRoom() {
    return this.socket.fromEvent('room-01');
  }
}
