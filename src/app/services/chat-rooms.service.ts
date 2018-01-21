import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatRoomsService {
  private url = 'https://spotim-demo-chat-server.herokuapp.com';
  private eventName = 'spotim/chat';
  private socket;

  /**
   * @description emits an event to a socket.io server (defined in url property)
   * 
   * @param {any} message an object containing details of the message
   * 
   * @memberOf ChatRoomsService
   */
  sendMessage(message): void {
    this.socket.emit(this.eventName, message);
  }

  /**
   * @description initializes a socket.io connection in order to get messages from the server
   * 
   * @returns an observable of messages sent by other clients
   * 
   * @memberOf ChatRoomsService
   */
  getMessages(): Observable<any> {
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
