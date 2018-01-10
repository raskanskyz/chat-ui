import { Component, OnInit } from '@angular/core';
import { ChatRoomsService } from '../services/chat-rooms.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  chatRoom: string;

  constructor(private chatRoomsService: ChatRoomsService) { }

  ngOnInit() {
    this.chatRoomsService.getChatRoom().subscribe((chatRooms) => {
      this.chatRoom = <string>chatRooms;
    });

    this.chatRoomsService.getMessages().subscribe(message => {
      console.log("message", message);
    })
  }

}
