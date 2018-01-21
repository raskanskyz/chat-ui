import { Component, OnInit, Input } from '@angular/core';

/**
 * @description component for displaying avatar
 * 
 * @export
 * @class AvatarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent implements OnInit {

  @Input() avatarUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
