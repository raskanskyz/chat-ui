import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  tempList: String[];

  constructor() { }

  ngOnInit() {
    this.tempList = [
      "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ];
  }

}
