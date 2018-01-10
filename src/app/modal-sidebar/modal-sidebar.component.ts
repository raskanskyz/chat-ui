import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.scss']
})
export class ModalSidebarComponent implements OnInit {
  availableAvatars: String[];

  constructor() { }

  ngOnInit() {
    this.availableAvatars = [
      "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ]
  }

}
