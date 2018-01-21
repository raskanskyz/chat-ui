import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {

  constructor() { }

  /**
   * @description 
   * 
   * 
   * @memberOf ChatModalComponent
   */
  ngOnInit(): void {
    if (!localStorage.getItem('_id')) {
      localStorage.setItem('_id', this.generateUUID());
    }
  }

  /**
   * @description function that generates a random UUID to define users identity
   * 
   * @returns {string} the generated UUID
   * 
   * @memberOf ChatModalComponent
   */
  generateUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
