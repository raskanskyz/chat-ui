import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.scss']
})
export class ModalSidebarComponent implements OnInit, AfterContentInit {

  availableAvatars: string[];
  randomAvatarUrl: string;

  constructor() { }

  ngOnInit() {
    this.availableAvatars = [
      "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ];
  }
  ngAfterContentInit(): void {

    //check if avatar is stored in localStorage
    if (!localStorage.getItem('currentAvatar')) {
      const randomIndex = this.getRandomInt(0, this.availableAvatars.length - 1);
      this.randomAvatarUrl = this.availableAvatars[randomIndex];
      localStorage.setItem('currentAvatar', this.randomAvatarUrl);
    }
    else {
      this.randomAvatarUrl = localStorage.getItem('currentAvatar');
    }

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



}
