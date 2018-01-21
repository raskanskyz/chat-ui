import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

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

  /**
   * @description initializes availableAvatars with a list of valid avatar urls and initializes the nickNameForm
   * 
   * 
   * @memberOf ModalSidebarComponent
   */
  ngOnInit() {
    this.availableAvatars = [
      "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
      "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ];

    this.nickNameForm = this.fb.group({
      nickName: ['', [Validators.required]],
    }, { updateOn: 'blur' });
  }


  /**
   * @description sets currentAvatarUrl with url stored in localStorage, otherwise picks a random avatar url and stores it in the localStorage for future use
   * 
   * 
   * @memberOf ModalSidebarComponent
   */
  ngAfterContentInit(): void {

    //check if avatar is stored in localStorage
    if (!localStorage.getItem('currentAvatar')) {
      const randomIndex = this.getRandomInt(0, this.availableAvatars.length - 1);
      this.currentAvatarUrl = this.availableAvatars[randomIndex];
      localStorage.setItem('currentAvatar', this.currentAvatarUrl);
    }
    //avatar is already stored in localStorage
    else {
      this.currentAvatarUrl = localStorage.getItem('currentAvatar');
    }

    //check if nickName is stored in localStorage
    if (!localStorage.getItem('nickName')) {
      this.nickName = "Guest";
      localStorage.setItem('nickName', this.nickName);
    }
    //nickName is already stored in localStorage
    else {
      this.nickName = localStorage.getItem('nickName');
    }
    this.nickNameForm.controls.nickName.setValue(this.nickName);
  }

  /**
   * @description function that generates a random number between min and max
   * 
   * @param {any} min the lower bound range
   * @param {any} max the upper bound range
   * @returns a random number between min and max
   * 
   * @memberOf ModalSidebarComponent
   */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  /**
   * @description sets the current user's nickName and stores it the localStorage
   * 
   * 
   * @memberOf ModalSidebarComponent
   */
  handleSubmitForm() {
    //if form valid
    if (!this.nickNameForm.controls.nickName.errors) {
      localStorage.setItem('nickName', this.nickNameForm.controls.nickName.value);
      this.nickName = this.nickNameForm.controls.nickName.value;
    }
  }
}
