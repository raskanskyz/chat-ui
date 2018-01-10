import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.scss']
})
export class ModalSidebarComponent implements OnInit, AfterContentInit {

  availableAvatars: string[];
  currentAvatarUrl: string;
  nickNameForm: FormGroup;
  nickName: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.availableAvatars = [
      "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ];

    this.nickNameForm = this.fb.group({
      nickName: [''],
    }, { updateOn: 'blur' });
  }
  ngAfterContentInit(): void {

    //check if avatar is stored in localStorage
    if (!localStorage.getItem('currentAvatar')) {
      const randomIndex = this.getRandomInt(0, this.availableAvatars.length - 1);
      this.currentAvatarUrl = this.availableAvatars[randomIndex];
      localStorage.setItem('currentAvatar', this.currentAvatarUrl);
    }
    else {
      this.currentAvatarUrl = localStorage.getItem('currentAvatar');
    }


    //check if avatar is stored in localStorage
    if (!localStorage.getItem('nickName')) {
      this.nickName = "Guest";
      localStorage.setItem('nickName', this.nickName);
    }
    else {
      this.nickName = localStorage.getItem('nickName');
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleSubmitForm() {
    localStorage.setItem('nickName', this.nickNameForm.controls.nickName.value);
    this.nickName = this.nickNameForm.controls.nickName.value;
  }
}
