import { Component, OnInit } from '@angular/core';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-mainview',
  templateUrl: './modal-mainview.component.html',
  styleUrls: ['./modal-mainview.component.scss']
})
export class ModalMainviewComponent implements OnInit {

  isSelfMessage: boolean;
  messages = [];
  connection;
  message;

  constructor(private chatRoomsService: ChatRoomsService) { }

  ngOnInit() {
    this.connection = this.chatRoomsService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  sendMessage() {

    if (!this.message) {
      return false;
    }

    const messageObj = {
      _id: localStorage.getItem('_id'),
      avatar: localStorage.getItem('currentAvatar'),
      userName: localStorage.getItem('nickName'),
      text: this.message
    }
    this.chatRoomsService.sendMessage(messageObj);
    this.message = '';
  }
}
