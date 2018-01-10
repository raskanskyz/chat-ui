import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatRoomsService {
  private url = 'https://spotim-demo-chat-server.herokuapp.com';
  private eventName = 'spotim/chat';
  private socket;



  getChatRoom() {
    let observable = new Observable(observer => {
      observer.next(this.url);
      return () => {

      };
    })
    return observable;
  }

  sendMessage(message) {
    this.socket.emit(this.eventName, message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on(this.eventName, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
