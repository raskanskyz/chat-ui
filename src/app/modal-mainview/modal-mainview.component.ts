import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-mainview',
  templateUrl: './modal-mainview.component.html',
  styleUrls: ['./modal-mainview.component.scss']
})
export class ModalMainviewComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  messages: any = [];
  connection;
  message;

  constructor(private chatRoomsService: ChatRoomsService) { }

  /**
   * @description initialize ModalMainviewComponent and loads current messages
   * 
   * 
   * @memberOf ModalMainviewComponent
   */
  ngOnInit() {
    this.connection = this.chatRoomsService.getMessages().subscribe((message: any) => {
      message.isSelfMessage = message._id == localStorage.getItem('_id');
      this.messages.push(message);
    })
  }


  /**
   * @description function that forces the conversation list to bottom in order to display newest messages first
   * 
   * 
   * @memberOf ModalMainviewComponent
   */
  ngAfterViewChecked(): void {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  /**
   * @description invokes ChatRoomsService.sendMessage() if the message has is valid
   * 
   * @returns true if message has been sent, otherwise false
   * 
   * @memberOf ModalMainviewComponent
   */
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
    return true;
  }
}
