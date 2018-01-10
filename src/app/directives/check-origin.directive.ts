import { Directive, ElementRef, Input, Renderer, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCheckOrigin]'
})
export class CheckOriginDirective implements OnInit {

  @HostBinding('style.flex-direction') flexDirection = '';
  @Input() senderId: string;

  constructor() {
  }

  ngOnInit() {
    this.setStyling();
  }

  setStyling() {
    if (localStorage.getItem('_id') == this.senderId) {
      this.flexDirection = 'row-reverse';
    }

  }
}
